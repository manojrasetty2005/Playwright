import { test, expect } from "@playwright/test";

test('youtube subscribe', async ({ page }) => {

    await page.goto("https://www.youtube.com/");

    const search = page.locator('input[name="search_query"]');

    await search.fill("Telugu Foodie");

    await search.press("Enter");

    await page.getByRole("link", { name: "Telugu Foodie" }).first().click();

    const subscribe = page.getByRole("button", {
        name: /subscribe/i
    });

    await expect(subscribe).toBeVisible();

});