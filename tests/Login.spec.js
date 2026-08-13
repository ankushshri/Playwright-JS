//const { test, expect } = require('@playwright/test')
//const loginPage = require('../Pages/loginpage')
//const homePage = require('../Pages/homepage')

const { test, expect } = require('../Fixtures/testFixtures')
const homePage = require('../Pages/homepage')

const testData = require('../TestData/TestData.json')


test('Valid login', async ({ page, loginPage,homePage }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    /*
        const lp = new loginPage(page)      // object of loginpage class
    
        await lp.loginToApplication(
            testData.validUser.Username,    // Fetched from testData json file
            testData.validUser.Password
        )
            
    */

    await loginPage.loginToApplication(
        testData.validUser.Username,
        testData.validUser.Password)



    /*
    const hp = new homePage(page)        // object of homepage class
    await hp.verifyHomePageLanding()

    await hp.logout()
    await lp.userLogoutSuccessfull()
    
    */

    await homePage.verifyHomePageLanding()

    await homePage.logout()

    await loginPage.userLogoutSuccessfull()

    

    
})