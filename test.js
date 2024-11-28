const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
import "dotenv/config";

async function example() {

  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {

    await driver.get('https://www.hs-esslingen.de/');

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);
    

    await driver.findElement(getCookieAcceptButton).click();

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    await driver.findElement(By.css('[title="Login ins Intranetportal"]')).click();

    let handles = await driver.getAllWindowHandles();

    await driver.switchTo().window(handles[1]);

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    await driver.findElement(By.id("username")).sendKeys(process.env.loginname.toString(), Key.TAB);
    await driver.findElement(By.id("password")).sendKeys(process.env.loginpassword.toString(), Key.ENTER);

    await driver.wait(until.elementLocated(By.className("in2-modal__blackbox"),10000));

    await driver.findElement(getCookieAcceptButton).click();

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    await driver.wait(until.elementLocated(By.css('[title="HEonline"]')), 10000);

    await driver.findElement(getHEOnlineButton).click();
    //await driver.findElement(By.css('[title="HEonline"]')).click();

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    handles = await driver.getAllWindowHandles();

    await driver.switchTo().window(handles[2]);

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    await driver.wait(until.elementLocated(By.id("id-ca-sidenav-content")),10000);

    await driver.findElement(getHELoginButton).click();

    await driver.wait(async () => {
      return await driver.executeScript('return document.readyState') === 'complete';
    }, 10000);

    await driver.wait(until.elementLocated(By.id("applications_panel")),10000);
    console.log("Test erfolgreich");
  } finally {
    await driver.quit();
  }

}

async function getHEOnlineButton(driver){
  var links;
  await driver.findElements(By.tagName('a')).then((data) => {
    links = data;
  })
  let count2Two = 0;
  for (let link of links) {
    await link.getProperty("title").then((data) => {
      content = data;
    })
    if (content === "HEonline") {
      count2Two++;
      if (count2Two == 2) {
      return link;
      }
    }
  }
}

async function getLoginButton(driver) {
  var links;
  await driver.findElements(By.tagName('a')).then((data) => {
    links = data;
  })
  for (let link of links) {
    await link.getText().then((data) => {
      content = data;
    })
    if (content.includes('Login ins Intranetportal')) {
      return link;
    }
  }
}

async function getHELoginButton(driver) {
  let buttons;
  await driver.findElements(By.tagName('button')).then((data) => {
    buttons = data;
  })
  for (let button of buttons) {
    await button.getText().then((data) => {
      content = data;
    })
    if (content.includes('Login')) {
        return button;
      }
    }
  }

async function getCookieAcceptButton(driver) {
  let buttons;
  await driver.findElements(By.tagName('button')).then((data) => {
    buttons = data;
  });
  for (let button of buttons) {
    await button.getText().then((data) => {
      button_text = data;
    });
    if (button_text.includes('Speichern & Schließen')) {
      return button;
    }
  }
}


//Testfunktionen

const startTime = Date.now();

example();

const endTime = Date.now();

console.log("Zeit vergangen: " + (endTime - startTime) + "ms");
