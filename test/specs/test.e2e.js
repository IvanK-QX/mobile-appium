const app = require("../../pages/app")

describe('MVP', () => {

    it('login to the app', async () => {
        await app.landingPage.agreePermissions()
        await app.loginPage.inputPhoneNumber()
        await app.loginPage.pressBackBtn()
        await app.loginPage.inputeCode()
        await app.mainPage.clickStartStream()
        await app.preStreamPage.allowPermission()
        await app.preStreamPage.agreeWithTos()
        await app.preStreamPage.changeStreamTitle()
        await app.preStreamPage.tapStartStreamBtn()
        await app.preStreamPage.observeModerationMessage()
        
        await driver.pause(3000)
    
    })
})


