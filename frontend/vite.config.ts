import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 3001,
    },
    resolve: {
      alias: {
        src: "/src",
      },
    },
    define: {
      "process.env": env,
    },
  };
});
