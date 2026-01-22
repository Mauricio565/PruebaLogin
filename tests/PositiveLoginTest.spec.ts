import { test, expect } from '@playwright/test';
import LoginPage from '../pages/Login';
import * as testData from './fixtures/TestData.json';
import Utils from '../pages/Utils';


let loginPage: LoginPage;
let utils: Utils;



test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    utils = new Utils(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
});




test('positive login test', async ({ page }) => {
    await loginPage.login(testData.usuarioexistente.username, testData.usuarioexistente.password);
    await utils.CheckUrlContain('practicetestautomation.com/logged-in-successfully/');
    await utils.CheckTextIsVisible('Logged In Successfully');
    await utils.CheckTextIsVisible('Congratulations student. You successfully logged in!');
    


});



