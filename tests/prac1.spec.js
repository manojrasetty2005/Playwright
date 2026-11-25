import{test,expect} from "@playwright/test";
let url="https://demowebshop.tricentis.com/";
let email="manojrasetty2005@gmail.com";
let pwd="manoj@012";
test("test add ",async({page})=>{
await page.goto(url);
await page.locator(".ico-login").click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill(pwd);
await page.locator(".login-button").click();
await page.getByText('Books').click();  
await page.locator(".product-item").filter({hasText:"Health Book"}).locator(".add-to-cart-button").click();
})