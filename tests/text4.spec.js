import {test,expect} from "@playwright/test";
test('invalid password test@sanity',async({page}) =>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("jhgfgifyg");
    await page.waitForTimeout(2000);
    await page.locator("#submit").click();

    let message=await page.locator("#error");
    await expect(message).toHaveText("Your password is invalid!");
})