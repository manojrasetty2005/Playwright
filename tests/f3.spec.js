import {test,expect} from "@playwright/test";
test("frame page",async({browser}) =>{
    let context= await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demo.automationtesting.in/Frames.html");
    let frame1=await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"});
    await frame1.getByRole("textbox").fill("Manoj"); 
    await page.waitForTimeout(3000);
})