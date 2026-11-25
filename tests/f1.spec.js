import{test,expect} from "@playwright/test";
test('child page',async({browser}) =>{
let context= await browser.newContext();
let page=await context.newPage();

await page.goto("https://the-internet.herokuapp.com/");

   await  page.getByRole("link",{name:"A/B Testing"}).click();

let msg=await page.locator("#content");
await expect(msg).toBeVisible();
})