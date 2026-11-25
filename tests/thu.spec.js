import {test,expect} from "@playwright/test";
test("dialogue msg",async({page})=>{
    page.on("dialog",(dialog)=>{
        dialog.dismiss();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
})