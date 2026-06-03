import {test} from '@playwright/test';


test('opening mynthra url',async({page})=>{
  await page.goto('https://www.myntra.com/boy-tshirts');
  const tshirtcount=await page.locator('//li[@class="product-base"]').count();
  console.log(tshirtcount);
  //await page.waitfortimeout(3000);

  const elements = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();

  // Convert text to numbers
  const values = elements.map(value =>Number(value.slice(4,7)));
  console.log(values);

  // Find minimum value
  const minValue = Math.min(...values);
  console.log('Minimum Value is:', minValue);
  //await page.waitfortimeout(3000);
 
  const brandname_minValue=await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()='${minValue}']/ancestor::div[@class="product-productMetaInfo"]/child::h3`).allTextContents();
  console.log("The brand name of min. price : ",brandname_minValue[0]);
   // const minIndex = values.indexOf(minValue);

    // Find corresponding brand
    //const minBrand = elements[minIndex];

    //console.log('Minimum Price:', minPrice);
    //console.log('Brand Name:', minBrand);


})
