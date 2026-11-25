import { test } from "../fixtures/myFixture";

import {expect} from "@playwright/test";
test("login test",async({webPage})=>{
    await webPage.waitForTimeout(3000);
})
