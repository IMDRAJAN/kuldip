import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true,
    },
    // allowedHosts: [
    //   "necessary-screen-delegation-other.trycloudflare.com", // ✅ Add your Cloudflare tunnel domain here
    // ],

    allowedHosts: true,
  },
});
