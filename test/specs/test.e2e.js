const landingPage = require("../../pages/landing_page")
const loginPage = require("../../pages/login_page")
const mainPage = require("../../pages/main_page")
const preStreamPage = require("../../pages/prestream_page")

describe('MVP', () => {

    it('login to the app', async () => {

        await landingPage.agreeBtn.click()
        await landingPage.allowPermissionBtn.click()
        await landingPage.phoneIcon.click()
        await loginPage.phoneNumberField.addValue('3028111111')
        await loginPage.continieBtn.click()
        await loginPage.confirmeNumber.click()
        await loginPage.pressBackbtn()
        await loginPage.inputeCode()
        await mainPage.clickStartStream()
        await preStreamPage.allowPermissions()
        await preStreamPage.agreeWithTos()
        await preStreamPage.changeStreamTitle()
        await preStreamPage.tapStartStreamBtn()
        await preStreamPage.observeModerationMessage()
        await driver.pause(3000)
    
    })
})


