import {test,expect} from "@playwright/test";
test("frame page",async({browser}) =>{
    let context= await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette");
    await page.getByRole("link",{name:"Iframe with in an Iframe"}).click();
    let Mainframe=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"});
    let MultipleFrames=await Mainframe.childFrames();
    let childFrame1=await MultipleFrames[0];
    await childFrame1.getByRole("textbox").fill("manojrasetty");
    await page.waitForTimeout(4000);


});
    