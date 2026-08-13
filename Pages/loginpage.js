const { expect } = require('@playwright/test')
class loginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page
        this.userNameInput = page.locator("//input[@placeholder='Username']")
        this.passwordInputBox = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//button[@type='submit']")
        this.loginText = page.locator("//h5[normalize-space()='Login']")

    }

    async loginToApplication(username, Password) {

        await this.userNameInput.fill(username)
        //

        await this.passwordInputBox.fill(Password)

        await this.loginButton.click()


    }

    async userLogoutSuccessfull() {
        await expect(this.loginText).toBeVisible()

    }


}
module.exports = loginPage;