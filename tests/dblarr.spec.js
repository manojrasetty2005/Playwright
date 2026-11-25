import {test,expect} from "@playwright/test";

let users=[["bharat1234@gmail.com","Bharat@123"],
["swapna.potnuru07@gmail.com","Password@123"],["himanitest@gmail.com","htest@123"],
["manojrasetty2005@gmail.com","manoj@012"],["renukamani1999@gmail.com","Renuka@1499"]];
let url="https://demowebshop.tricentis.com/";
for(let[email,pwd] of users){
test(`login for user ${email}`,async({page})=>{
        await page.goto(url);
        await page.locator(".ico-login").click();
        await page.getByLabel("Email:").fill(email);
        await page.getByLabel("Password:").fill(pwd);
        await page.locator(".login-button").click();
        let logout=await page.getByRole("link",{name:"Log out"});
        await expect(logout).toBeVisible();
        await page.waitForTimeout(3000);

    })
}