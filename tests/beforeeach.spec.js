import {test,expect } from "@playwright/test";

let context;
let page;
test.beforeEach(async({browser}) =>{
context= await browser.newcontext();
page=await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manojrasetty@gmail.com");
    await page.locator("#Password").fill("manoj@012");
    await page.locator(".login-button").click();

 })

 test("books",async()=>{
    await page.locator(`a[href="/books"]`).first().click();
    await page.locator(`h2 a[href="/health"]`).click();
    await page.locator(".product-box-add-to-cart-button").third().click();
    let msg=await page.locator(".content");
    await expect(msg).toContainText("The product has been added to your shopping cart");

 })

 test("shoppingcart",async()=>{
    await page.locator
    await page.locator(".country-input").selectOption("india");
await page.locator("#ZipPostalCode").fill("517257");
await page.locator("#termsofservice").check();
 })
