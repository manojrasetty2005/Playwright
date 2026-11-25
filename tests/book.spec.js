import {test,expect} from "@playwright/test";
test("books page",async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manojrasetty@gmail.com");
    await page.locator("#Password").fill("manoj@012");
    await page.locator(".login-button").click();

    await page.locator("a[href='/books']").first().click();
    await page.locator("#products-orderby").selectOption("Price: Low to High");
    await page.waitForTimeout(3000);
    await page.locator("#products-pagesize").selectOption("12");
    await page.waitForTimeout(3000);
    await page.locator("#products-viewmode").selectOption("List");
    await page.waitForTimeout(2000);
})