import { test, expect } from "@playwright/test";

const BASE = "/Portfolio/";

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  smallDesktop: { width: 1120, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 812 },
} as const;

const SECTIONS = [
  { name: "main", selector: "#main" },
  { name: "stack", selector: "#stack" },
  { name: "works", selector: "#works" },
  { name: "contact", selector: "#contact" },
];

for (const [device, viewport] of Object.entries(VIEWPORTS)) {
  test.describe(`${device} (${viewport.width}px)`, () => {
    test.use({ viewport });

    test("full page", async ({ page }) => {
      await page.goto(BASE, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(2000);
      await expect(page).toHaveScreenshot(`full-${device}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });

    for (const section of SECTIONS) {
      test(`section: ${section.name}`, async ({ page }) => {
        await page.goto(BASE, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(2000);
        const el = page.locator(section.selector);
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(el).toHaveScreenshot(`${section.name}-${device}.png`, {
          animations: "disabled",
        });
      });
    }
  });
}
