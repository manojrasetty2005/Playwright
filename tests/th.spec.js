import {test,expect} from "@playwright/test";
test("dialogue msg",async({page})=>{
    page.on("dialog",(dialog)=>{
        dialog.accept();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Simple Alert"}).click();
})