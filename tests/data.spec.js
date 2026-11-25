import {test,expect} from "@playwright/test";
import fs from 'fs';
import {parse} from 'csv-parse/sync';

let csvpath='testData/data.csv';
let data =fs.readFileSync(csvpath,'utf-8');

let records=parse(data,{
    columns:true,
    skip_empty_lines:true,
    trim:true
});

for(let lData of records){
    test(`login test for ${lData.username}`,async({page})=>{

        await page.goto("https://demowebshop.tricentis.com/login");
        await page.locator("#Email").fill(lData.username);
        await page.locator("#Password").fill(lData.Password);
        await page.locator(".login-button").click();

        let logout=await page.locator(".ico-logout");
        await expect(logout).toBeVisible();
        await page.waitForTimeout(5000);



    })

}