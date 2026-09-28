// @lovable.dev/vite-tanstack-config already includes the required TanStack Start/Vite plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
});
