import { Page, expect} from "@playwright/test"

export default class Utils {
        

    readonly page: Page;


    constructor(page:Page) {
         this.page=page;
   

    }
    async CheckTextIsVisible(text:string) {
         await expect(this.page.getByText(text)).toBeVisible();

    }

    async CheckUrlContain(text: string) {
        expect (this.page.url()).toContain(text);


    }
    async visitUrl() {
        await this.page.goto('https://practice.expandtesting.com/register');
        await this.page.waitForLoadState();


    }   
}