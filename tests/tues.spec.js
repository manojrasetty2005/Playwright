import {test,expect} from "@playwright/test";
let url="https://demowebshop.tricentis.com/";
let email ="manojrasetty2005@gmail.com";
let pwd="manoj@012";

test('playwright@smoke ',async({page}) => {
    await page.goto(url);
    await page.getByRole("link",{name:"Log in"}).click();
    await page.getByLabel("Email:").fill(email);
    await page.getByLabel("Password:").fill(pwd);
    await page.getByRole("button",{name:"Log in"}).click();

    let logout=await page.getByRole("link",{name:"Log out"});
    await expect(logout).toBeVisible();
    await page.waitForTimeout(3000);

    await page.getByRole("link",{name:"Books"}).first().click();

    await page.locator(".product-item").filter({hasText:"Health Book"}).getByRole("button",{name:"Add to cart"}).click();
    let msg=await page.getByText("The product has been added to your");
    await expect(msg).toBeVisible();
    let msg1=await page.getByText("The product has been added to your").textContent();
    console.log(msg1);
})

