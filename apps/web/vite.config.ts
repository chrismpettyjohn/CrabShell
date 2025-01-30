import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  define: {
    "process.env.API_BASE_URL": JSON.stringify(
      process.env.VITE_API_BASE_URL || "/api"
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
