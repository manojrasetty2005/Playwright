import {test,expect} from "@playwright/test";
test('negative test @reg',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manojrasetty2005@gmail.com");
    await page.locator("#Password").fill("kggf");
    await page.locator(".login-button").click();
    
    let error = await page.locator(".validation-summary-errors");
    await expect(error).toContainText("The credentials provided are incorrect");
})