import {test ,expect } from "@playwright/test";

test('practice',async({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByPlaceholder("Enter Name").fill("Raseety manoj kumar");
await page.getByPlaceholder("Enter EMail").fill("rasettymanoj2005@gmail.com");
await page.getByPlaceholder("Enter Phone").fill("9502433542");
await page.getByLabel("textarea").fill("rasetty");

})