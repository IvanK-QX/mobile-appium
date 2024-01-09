const { isAwaitKeyword } = require("typescript")

describe('MVP', () => {

    it('login to the app', async () => {

        await $('android.widget.Button').click()
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click()
        await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.widget.Button').click()
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
        
        await $('[text="Profile"]').click()
        await driver.pause(1000)
    
    })
})


