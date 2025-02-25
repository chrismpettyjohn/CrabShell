import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    define: {
      "process.env.API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL || "/api"),
      "process.env.IMAGER_BASE_URL": JSON.stringify(env.VITE_IMAGER_BASE_URL || ""),
      "process.env.BADGE_BASE_URL": JSON.stringify(env.VITE_BADGE_BASE_URL || ""),
      "process.env.BADGE_EXT": JSON.stringify(env.VITE_BADGE_EXT || ""),
      "process.env.MAIN_SITE_URL": JSON.stringify(env.VITE_MAIN_SITE_URL || ""),
      "process.env.GUEST_REDIRECT_URL": JSON.stringify(env.VITE_GUEST_REDIRECT_URL || ""),
    },
    plugins: [solidPlugin()],
    server: {
      port: 4002,
    },
    build: {
      target: "esnext",
    },
  };
});
