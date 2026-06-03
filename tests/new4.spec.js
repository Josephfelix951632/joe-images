import {test} from '@playwright/test';
//import { asyncWrapProviders } from 'node:async_hooks';


test('opening amazon url',async({page})=>{
await page.goto('https://www.amazon.in//');
await page.waitForTimeout(1000);
await page.click("//a[text() = 'Mobiles']")
// 
await page.click("(//a[text() = 'Mobiles'])[1]/ancestor::div[@class='nav-sprite']/following-sibling::div//a[@href='/b/?_encoding=UTF8&node=1389335031&ref_=sv_top_elec_mega_4']/span[@class='nav-a-content']");
await page.pause();
// await page.click("");
// await page.waitForTimeout(5000);


//await page.locator('text=Audio');
//await page.locator('text=headphones');









});
