const { Builder, By, until, WebDriverWait } = require("selenium-webdriver");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test_case() {
  //create driver
  let driver = await new Builder().forBrowser("firefox").build();

  //send driver to sebsite
  driver.get("https://opensource-demo.orangehrmlive.com/");

  //input username and password
  await driver.wait(until.elementLocated(By.name("username"))).sendKeys("Admin");
  await driver.wait(until.elementLocated(By.name("password"))).sendKeys("admin123");
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"))).click();
  await sleep(3000);
  
  //add a new record
  await driver.wait(until.elementLocated(By.xpath("//a[contains(.,'Admin')]")), 5000).click();
  await driver.wait(until.elementLocated(By.xpath("//li[contains(.,'Job ')]"))).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Pay Grades')]")), 2000).click();
  await sleep(2000);
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--secondary")), 2000).click();
  await driver.wait(until.elementLocated(By.xpath("//div[2]/input"))).sendKeys("random");
  await sleep(1000);
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space")), 1000).click();

  //add currency
  await driver.wait(until.elementLocated(By.xpath("//button[contains(.,' Add')]"))).click();
  await sleep(1000);
  await driver.wait(until.elementLocated(By.css(".oxd-select-text-input")), 1000).click();
  await driver.wait(until.elementLocated(By.xpath('//div[@class="oxd-select-option" and contains(.,"UAH")]'))).click();
  await driver.wait(until.elementLocated(By.xpath("//div[2]/div/div/div/div[2]/input"))).sendKeys("2000");
  await driver.wait(until.elementLocated(By.xpath("//div[2]/div/div[2]/input"))).sendKeys("20000");
  await driver.wait(until.elementLocated(By.xpath("(//button[@type='submit'])[2]"))).click();

  //delete currency
  await driver.wait(until.elementLocated(By.xpath('//div[@class="oxd-table-cell oxd-padding-cell" and contains(.,"2000")] / following-sibling::div/descendant::i[@class="oxd-icon bi-trash"]'))).click();
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"))).click();

  //delete record
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--ghost"))).click();
  await driver.wait(until.elementLocated(By.xpath('//div[@class="oxd-table-cell oxd-padding-cell" and contains(.,"random")] / following-sibling::div/descendant::i[@class="oxd-icon bi-trash"]'))).click();
  await driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"))).click();
  
  //exit
  driver.quit();
};

test_case();
