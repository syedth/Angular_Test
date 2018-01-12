import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';

defineSupportCode(({Given, When, Then, }) => {

  Given(/^I'm on the google page$/, loginRpc);

  async function loginRpc(): Promise<void> {
    browser.get('https://www.google.co.in');
    browser.sleep(3000);
  }

  Then(/^I click on Gmail$/, searchGoogle);

  async function searchGoogle(): Promise<void> {
   await element(by.xpath('.//*[@id=\'gbw\']/div/div/div[1]/div[1]/a')).click();
  }
});
