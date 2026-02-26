import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: "spa",
  server: {
    host: "localhost",
    port: 5173,
    strictPort: false,
    open: "Safari",
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 5173,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // SPA fallback: serve index.html for routes that don't match a file (fixes 404 on refresh/direct URL)
    {
      name: "spa-fallback",
      configureServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
        server.middlewares.use((req: { url?: string }, _res: unknown, next: () => void) => {
          if (req.url?.startsWith("/src/") || req.url?.startsWith("/@") || req.url?.includes(".")) {
            return next();
          }
          req.url = "/index.html";
          next();
        });
      },
      configurePreviewServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
        server.middlewares.use((req: { url?: string }, _res: unknown, next: () => void) => {
          if (req.url?.startsWith("/@") || req.url?.includes(".")) {
            return next();
          }
          req.url = "/index.html";
          next();
        });
      },
    },
  ].filter(Boolean),
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
    force: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
