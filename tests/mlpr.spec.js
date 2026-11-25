import {test,expect} from "@playwright/test";
let product=['book','computer',"giftcard",'jewellery'];
let url="https://demowebshop.tricentis.com/";
let email ="manojrasetty2005@gmail.com";
let pwd="manoj@012";

for(let item of product){
    test(`search for product ${item}`,async({page}) =>{
        await page.goto(url);
        await page.locator(".ico-login").click();
        await page.getByLabel("Email:").fill(email);
        await page.getByLabel("Password:").fill(pwd);
        await page.locator(".login-button").click();
        await page.locator("#small-searchterms").click().fill(item);
        await page.getByRole('button',{name:"Search"}).click();
        await page.waitForTimeout(3000);

    })
}
