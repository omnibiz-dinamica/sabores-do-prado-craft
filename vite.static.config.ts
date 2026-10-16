// Dedicated Vite config for the STATIC (client-only, no SSR/Nitro/Cloudflare)
// build used to deploy to shared hosting (Hostnet) via FTP. See
// DEPLOY-HOSTNET.md for the full deploy instructions.
//
// This is intentionally separate from vite.config.ts (used by
// `npm run dev` / `npm run build`, which stays on TanStack Start +
// Nitro for Lovable's own preview/deploy). Running `npm run build:static`
// never touches vite.config.ts or the Start/Nitro pipeline.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
