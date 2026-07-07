import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  css: { transformer: "lightningcss" },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Fully prerender to static HTML — GitHub Pages only serves static files, no server runtime.
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
});
