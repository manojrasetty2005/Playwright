import {test,expect} from "@playwright/test";
test('multiple slect@smoke ',async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
   // await page.getByLabel("Colors:").selectOption(["Red","Green"]);
    //await page.waitForTimeout(3000);
    await page.locator("#multipleFilesInput").setInputFiles(["tests/pdfs/loops.pdf","tests/pdfs/manoj.pdf"]);
    await page.waitForTimeout(3000);
})