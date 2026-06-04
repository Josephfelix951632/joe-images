import {test} from '@playwright/test';


test('opening mynthra url',async({page})=>{
  await page.goto('https://www.myntra.com/boy-tshirts');
  const tshirtcount=await page.locator('//li[@class="product-base"]').count();
  console.log(tshirtcount);
  await page.waitForTimeout(3000);

  const elements=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]').allTextContents();
  const values=elements.map(value =>Number(value.slice(4,7)));
  //const values=elements.map(value =>Number(value.replace(/[^\d]/g,"")));
  console.log(values);
  const minValue=Math.min(...values);
  console.log('minimum value is:',minValue);

  //const brandname_minvalue=await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price'] /descendant::span[(@class='product-discountedPrice'and text()='${minValue}' or (text()='${minValue}' and not(@class)))]/ancestor::div/h3[@class="product-brand"]`).allTextContents();
  const brandname_minvalue=await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[(@class="product-discountedPrice" and text()='${minValue}'or (text()='${minValue}' and not (@class)))]/ancestor::div[@class="product-productMetaInfo"]/h3`).allTextContents();

  console.log("the brandname:",brandname_minvalue[0]);



});
//mynthra  maximum value for this site

