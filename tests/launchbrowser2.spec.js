import { test,expect} from "@playwright/test";
test('launch broswer',async({page}) =>
{
    let context=await newcontext();
    let page1 =await context.newpage();
    let page2=await context.newpage();

    await page1.goto("https://www.flipkart.com/");
    await page2.goto("https://www.amazon.in/");
})