// Entry point used ONLY by the static (client-only, no SSR) build.
// See vite.static.config.ts and DEPLOY-HOSTNET.md.
//
// This file is never imported by the normal TanStack Start build/dev
// flow (src/start.ts, src/server.ts), so it has no effect on the
// Lovable-managed SSR/Nitro build.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./styles.css";
import { getRouter } from "./router";

const router = getRouter();

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element #root not found in static index.html");
}

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
