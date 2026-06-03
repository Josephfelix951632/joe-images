import {test} from '@playwright/test';
//import { asyncWrapProviders } from 'node:async_hooks';


test('opening mynthra url',async({page})=>{
await page.goto('https://www.myntra.com/');
await page.waitForTimeout(1000);
await page.click('//a[@style="border-bottom-color:#f26a10;"]');
await page.waitForTimeout(1000);
await page.click('//a[@data-reactid="335"]');
await page.waitForTimeout(1000);
//await page.locator('//ul[@class="results-base"]');
//const tshirtcount
//await page.waitForTimeout(4000);
await page.locator('//li[@class="product-base"]').count();
await page.waitForTimeout(4000);




});