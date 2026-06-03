import test from "@playwright/test";
test('opening amazon url',async({page})=>{
await page.goto('https://www.amazon.in/');

await page.waitForTimeout(2000);

// await page.hover("//span[text='Fresh']");
// await page.click()







});