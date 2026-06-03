import {test} from '@playwright/test';
//import { asyncWrapProviders } from 'node:async_hooks';


test('opening amazon url',async({page})=>{
await page.goto('https://www.amazon.in//');
await page.waitForTimeout(2000);
})
test('opening meesho url',async({page})=>{
//test ("Meesho", async ({page}) => {

    await page.goto("https://www.meesho.in/")
    await page.waitForTimeout(2000);

    //await page.goBack();


    
})