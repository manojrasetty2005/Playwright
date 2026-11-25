import {test,expect} from "@playwright/test";
let url="https://demowebshop.tricentis.com/";
let email="manojrasetty2005@gmail.com";
let pwd="manoj@012";
test(" test books",async({page})=>{
    await page.goto(url);
    await page.locator(".ico-login").click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill("pwd");
await page.locator(".login-button").click();
await page.locator(`a[href='/books']`).first().click();
await page.locator(`h2 a[href='/health']`).first().click();
await page.locator("#add-to-cart-button-22").click();
let notify= await page.locator("#bar-notification");
await expect(notify).toContainText("The product has been added to your shopping cart");

//await page.locator("#cart-label").click();
//await page.goto("https://demowebshop.tricentis.com/cart");

await page.locator(".country-input").selectOption("india");
await page.locator("#ZipPostalCode").fill("517257");
await page.locator("#termsofservice").check();
await page.locator("#checkout").click();
})