import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kuldip/", // Add this line to set the base path
  // server: {
  //   hmr: {
  //     overlay: true,
  //   },
  //   allowedHosts: true,
  // },
});
n