import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config.mts";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
      outDir: "dist",
    },
    plugins: [
      staticAdapter({
        origin: "https://luna-checklist-c7u0sssed-ssadds-projects-34e04faf.vercel.app"
      }),
    ],
  };
});
