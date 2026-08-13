const { test: base } = require('@playwright/test')

const loginPage = require('../Pages/loginpage')

const homePage = require('../Pages/homepage')

/**
 * @typedef {import('../Pages/loginpage')} LoginPageType
 * @typedef {import('../Pages/homepage')} HomePageType
 * 
 */

/**
 * @type {import('@playwright/test').TestType<
 *     import('@playwright/test').PlaywrightTestArgs &
 *     import('@playwright/test').PlaywrightTestOptions,
 *     {
 *         loginPage: LoginPageType,
 *         homePage: HomePageType
 *     }
 * >}
 */

const test = base.extend({

    loginPage: async ({ page }, use) => {
        
        await use(new loginPage(page))

    },

    homePage:async({page},use)=>{
        
        await use(new homePage(page))
    }
})

module.exports={test};