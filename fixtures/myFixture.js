const {test:Base} =require("@playwright/test");

export const test=Base.extend({
    webPage:async({page},use) =>{
        await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manojrasetty@gmail.com");
    await page.locator("#Password").fill("manoj@012");
    await page.locator(".login-button").click();
    await use(page);
    await console.log("test completed")
    }
})