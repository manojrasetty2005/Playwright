import {test,expect} from "@playwright/test";

let url="https://rahulshettyacademy.com/client/#/auth/login";
let email="manojrasetty2005@gmail.com";
let pwd="Manoj@012";

test('add to cart page',async({page}) =>
{
    await page.goto(url);
    await page.locator(".login-title").click();
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(pwd);
    await page.locator("#login").click();
   
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).locator(".w-10 ").click();
    let msg=await page.locator(".toast-container");
    await expect(msg).toBeVisible();

    await page.locator(`button[routerlink="/dashboard/cart"]`).click();
    await page.locator(".btn-primary").last().click();

    await page.locator(".ddl").first().selectOption("03");
    await page.locator(".dd1").last().selectOption("23");

    await page.locator(`input[placeholder='Select Country']`).pressSequentially("india");
    await page.locator(".list-group-item").last().click();
    await page.waitForTimeout(3000);



})