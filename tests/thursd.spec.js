import {test,expect} from "@playwright/test";
test("drop msg",async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   let ele= await page.locator("#draggable");
   let sorce= await page.locator("#droppable");
   await ele.dragTo(sorce);
   await page.waitForTimeout(3000);
})