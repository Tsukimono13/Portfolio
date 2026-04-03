import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./e2e/screenshots",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3001",
  },
  webServer: {
    command: "npm start",
    port: 3001,
    reuseExistingServer: true,
    timeout: 60000,
  },
});
