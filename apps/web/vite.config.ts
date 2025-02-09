import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    define: {
      "process.env.API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL || "/api"
      ),
      "process.env.IMAGER_BASE_URL": JSON.stringify(
        env.VITE_IMAGER_BASE_URL || ""
      ),
      "process.env.NITRO_URL": JSON.stringify(env.VITE_NITRO_URL || ""),
      "process.env.SITE_NAME": JSON.stringify(env.VITE_SITE_NAME || "HabCrab"),
      "process.env.USER_OF_THE_WEEK_ID": JSON.stringify(
        env.VITE_USER_OF_THE_WEEK_ID || "-1"
      ),
      "process.env.USER_OF_THE_WEEK_TEXT": JSON.stringify(
        env.VITE_USER_OF_THE_WEEK_TEXT || ""
      ),
      "process.env.ADMIN_PANEL_URL": JSON.stringify(
        env.VITE_ADMIN_PANEL_URL || ""
      ),
      "process.env.GUEST_REDIRECT_URL": JSON.stringify(
        env.VITE_GUEST_REDIRECT_URL || ""
      ),
      "process.env.FINDRETROS_GUARD_ENABLED": JSON.stringify(
        env.VITE_FINDRETROS_GUARD_ENABLED || ""
      ),
      "process.env.DISCORD_INVITE_URL": JSON.stringify(
        env.VITE_DISCORD_INVITE_URL || ""
      ),
    },
    plugins: [solidPlugin()],
    server: {
      port: 3000,
    },
    build: {
      target: "esnext",
    },
  };
});
