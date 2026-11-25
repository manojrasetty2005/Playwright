import {test,expect} from "@playwright/test";
test("drop msg@reg",async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#draggable").hover();
await page.mouse.down();
await page.locator("#droppable").hover();
await page.mouse.up();
//
await page.dragAndDrop("#draggable","#droppable")
await page.waitForTimeout(3000);
})