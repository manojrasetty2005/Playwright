import {test,expect} from "@playwright/test";
test('youtube subscribe',async({page}) =>
{
    await page.goto("https://www.youtube.com/");
    await page.locator(".ytSearchboxComponentInput").fill("Telugu Foodie");
    await page.locator(`input[name="search_query"]`).press("enter");
    await page.getByRole("link",{name:"Telugu Foodie"}).first().click();
   let sub= await page.getByRole("button",{name:/subscribe/i}).click();
   await expect(sub).toBevisible();
    await page.waitForTimeout(3000);
    
    
    
})