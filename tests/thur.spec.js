import {test,expect} from "@playwright/test";
test("dialogue msg",async({page})=>{
    page.on("dialog",(dialog)=>{
        dialog.accept("manojrasetty");
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Prompt Alert"}).click();

    //let msg=await page.locator("#demo");
    //await expect(msg).toHaveText("Hello manojrasetty! How are you today?");
    
    
})