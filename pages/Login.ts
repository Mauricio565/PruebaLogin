import {Page, expect} from '@playwright/test';
import  * as testData from '../tests/fixtures/TestData.json';

export default class LoginPage {
    readonly page;
    readonly usernameInput;
    readonly passwordInput;
    readonly summitButton;

    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.summitButton = page.locator('#submit');
    }

    async login(username: string, password: string) {
        await this.usernameInput.type(username);
        await this.passwordInput.type(password);
        await this.summitButton.click();
    }

} 
