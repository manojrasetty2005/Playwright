import {test,expect} from "@playwright/test";
test("frame page",async({browser}) =>{
    let context= await browser.newContext();
    let page=await context.newPage();

await page.goto("https://vinothqaacademy.com/iframe/");
await page.goto("https://vinothqaacademy.com/demo-site/");
await page.locator("#vfb-5").fill("manoj");
await page.locator
await frame.waitForTimeout(3000);
})
