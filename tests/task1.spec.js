import {test,expect} from "@playwright/test";
test('testing url @reg ',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.waitForTimeout(3000);
    await expect (page).toHaveURL("https://demowebshop.tricentis.com/login");
})