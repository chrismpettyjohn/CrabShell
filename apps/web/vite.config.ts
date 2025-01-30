import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  define: {
    "process.env.API_BASE_URL": JSON.stringify(
      process.env.VITE_API_BASE_URL || "/api"
    ),
    "process.env.IMAGER_BASE_URL": JSON.stringify(
      process.env.IMAGER_BASE_URL || ""
    ),
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
