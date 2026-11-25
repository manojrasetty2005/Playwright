import{test,expect} from "@playwright/test";
test('child page',async({browser}) =>{
 let context= await browser.newContext();
 let page=await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

let [childpage]=await Promise.all([context.waitForEvent('page'),
    page.getByRole("link",{name:"OrangeHRM, Inc"}).click()]);

 await childpage.getByRole("button",{name:"Contact Sales"}).first().click();
 await childpage.waitForTimeout(3000);   

})