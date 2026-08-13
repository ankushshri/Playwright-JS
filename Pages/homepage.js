
const { expect } = require('@playwright/test')
class homePage {



    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page
        this.homePageTitle = page.locator("//h6[normalize-space()='Dashboard']")
        this.menuicon = page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']")
        this.logoutbutton = page.locator("//a[normalize-space()='Logout']")
    }


    async verifyHomePageLanding() {

        await expect(this.homePageTitle).toBeVisible()

    }

    async logout() {
        await this.menuicon.click()
        await this.logoutbutton.click()
    }
}
module.exports = homePage;