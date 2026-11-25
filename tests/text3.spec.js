import {test,expect} from "@playwright/test";
test(' negative username test@retesting',async ({page}) =>
{
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("#username").fill("mjbdj");
  await page.locator("#password").fill(" Password123");
  await page.waitForTimeout(2000);
  await page.locator("#submit").click();

//let message=await page.locator("#error");
//await expect(message).toContainText("error");

let msg=await page.locator("#error");
await expect(msg).toHaveText("Your username is invalid!");




})