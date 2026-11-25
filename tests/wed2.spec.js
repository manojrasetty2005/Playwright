import {test,expect} from "@playwright/test";
test('login ',async({page}) =>
{
    await page.goto("https://automationexercise.com/login");
    await page.locator(".btn-default").first().click();
    await page.getByPlaceholder("Email Address:").fill("manojrasetty2005@gmail.com");
    await page.getByPlaceholder("Password:").fill("manoj@012");
})