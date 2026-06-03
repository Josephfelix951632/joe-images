import {test} from '@playwright/test';
//import { asyncWrapProviders } from 'node:async_hooks';


test('opening mynthra url',async({page})=>{
await page.goto('https://www.myntra.com/boy-tshirts');
const tshirtcount=await page.locator('//li[@class="product-base"]').count();
console.log(tshirtcount);

const menuItems = await page.locator('//li[@class="product-base"]/a/div[2]/div//span[@class="product-discountedPrice"]').allTextContents();
console.log(menuItems);



//await page.click('//li[@class="product-base"]/a/div[2]/div//span[@class="product-discountedPrice"]');
await page.waitForTimeout(1000);


//await page.click('//span[@class="product-discountedPrice"]/ancestor::div/child::h3[@class="product-brand"]');
//await page.waitForTimeout(1000);


//await page.click('//span[@class="product-discountedPrice"]/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]');
//await page.waitForTimeout(1000);




});