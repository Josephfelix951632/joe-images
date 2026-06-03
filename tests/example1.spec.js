import {test} from '@playwright/test';
test('opening the amazon url',async({page})=>{
    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(5000);

    await page.screenshot({path : "amazon.png"})


})
test('opening the flipkart url',async({page})=>{
    await page.goto('');

    await page.waitForTimeout(5000);

    await page.screenshot({path : "amazon.png"})

})