const landingPage = require("../../pages/landing_page")

describe('MVP', () => {

    it('login to the app', async () => {

        await landingPage.agreeBtn.click()
        // await $('android.widget.Button').click()
        await landingPage.allowPermissionBtn.click()
        await $('//androidx.compose.ui.platform.l1/android.view.View/android.view.View/android.view.View[3]/android.widget.Button').click()
        await $('android.widget.EditText').addValue('3028111111')
        await $('//android.widget.Button[@resource-id="com.plamfy.platform:id/btnContinue"]').click()
        await $('[resource-id="android:id/button1"]').click()
        await driver.pause(1000)
        await driver.pressKeyCode(4)
        await driver.pause(1000)

        await driver.touchAction([ { action: 'tap', x: 540, y: 738} ])
        console.log('click')
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        // await $('//android.widget.LinearLayout[[resource-id="com.plamfy.platform:id/sms_code_input"]/android.view.View[3]').addValue('1')
        // await $('//android.widget.LinearLayout[[resource-id="com.plamfy.platform:id/sms_code_input"]/android.view.View[4]').addValue('1')
        // await $('//android.widget.LinearLayout[[resource-id="com.plamfy.platform:id/sms_code_input"]/android.view.View[5]').addValue('1')
        // await $('//android.widget.LinearLayout[[resource-id="com.plamfy.platform:id/sms_code_input"]/android.view.View[6]').addValue('1')
        await $('android.widget.Button').click()

        //add profile 
        // const name = `APPIUM${Math.floor(Math.random() * (999999 - 100000) + 100000)}`
        // await $('//android.widget.ScrollView/android.widget.EditText[1]/android.view.View').addValue(name)
        // await $('//android.widget.ScrollView/android.widget.EditText[2]/android.view.View').addValue(`${name}@email.com`)
        
        // await $('[content-desc="08 January 2006"]').click()
        // await $('[resource-id="android:id/button1"]').click()
        // await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button').click()
        await driver.pause(1000)
        // await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])
        
        await $('android.widget.Button').click()
        await $('android.widget.Button').click()
        await $('[text="While using the app"]').click()
        await $('android.widget.CheckBox').click()
        await $('android.widget.Button').click()
        await $('//android.widget.EditText/android.view.View').click()
        await driver.pause(500)
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
        await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
        await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
        // await $('//android.widget.EditText/android.view.View').addValue('lets go party')
        // await $('//android.widget.EditText[@text="Hurry up! We have started yet 🔥"]/android.view.View').addValue('lets go party')
        await $('android.widget.Button').click()
        await driver.pause(500)
        await $('android.widget.Button').click()
        await driver.pause(3000)
        const text = "Sexual or violent content is strictly prohibited. All violations will be banned. you can contact our Plamfy support Team for any questions and feedback. Have fun!"
        await expect(await $(`[text="${text}"]`)).toHaveText(text)
        await expect(await $(`[text="${text}"]`)).toBeTruthy()
        await driver.pause(3000)
    
    })
})


