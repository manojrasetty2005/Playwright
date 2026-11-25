import {test,expect} from "@playwright/test";
test('element screenshot@sanity',async({page}) =>{
 await page.goto("https://demowebshop.tricentis.com/");
    
  await page.getByRole("img",{name:"Tricentis Demo Web Shop"});
  await page.screenshot({path:"screenshot/Element.png"});

})