// Runs after `vite build --config vite.static.config.ts`.
// Writes the Apache SPA-fallback .htaccess into dist/ and prints a short
// summary of the bundle, matching what DEPLOY-HOSTNET.md documents.
import { writeFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const distDir = resolve(process.cwd(), "dist");

// The static build regenerates src/routeTree.gen.ts targeting plain
// @tanstack/react-router ("react"), which drops the @tanstack/react-start
// type-augmentation block that the normal `npm run build`/`npm run dev`
// (TanStack Start/Nitro) flow expects. That flow regenerates the file
// itself on its own next run either way, but restoring the committed
// version here keeps the working tree clean after `build:static` and
// avoids confusing diffs. Best-effort only — never fails the build.
try {
  execFileSync("git", ["checkout", "--", "src/routeTree.gen.ts"], { stdio: "ignore" });
} catch {
  // Not a git checkout, nothing to restore, or git unavailable — ignore.
}

const htaccess = `# Serve existing files/directories directly; everything else falls back to
# index.html so the client-side router (TanStack Router) can handle the route.
RewriteEngine On
RewriteBase /

# Don't rewrite requests for actual files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]

# Cache hashed static assets aggressively; never cache index.html itself.
<IfModule mod_headers.c>
  <FilesMatch "\\.(?:css|js|woff2?|ttf|eot|svg|png|jpe?g|gif|webp|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "^index\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>
`;

writeFileSync(resolve(distDir, ".htaccess"), htaccess, "utf8");

const entries = readdirSync(distDir).sort();
console.log("\n[postbuild] Bundle estático pronto em dist/:");
for (const entry of entries) {
  const kind = statSync(resolve(distDir, entry)).isDirectory() ? "dir " : "file";
  console.log(`  ${kind}  ${entry}`);
}
