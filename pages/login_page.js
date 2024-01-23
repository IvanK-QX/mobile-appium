const LoginPage = {

    async inputPhoneNumber() {
        await $('android.widget.EditText').addValue('3028111111')
        await $('//android.widget.Button[@resource-id="com.plamfy.platform:id/btnContinue"]').click()
        await $('[resource-id="android:id/button1"]').click()
    },
    // get phoneNumberField() {
    //     return $('android.widget.EditText')
    // },

    // get continieBtn() {
    //     return $('//android.widget.Button[@resource-id="com.plamfy.platform:id/btnContinue"]')
    // },

    // get confirmeNumber() {
    //     return $('[resource-id="android:id/button1"]')
    // },

    async inputeCode() {
        await driver.pause(1000)
        await driver.touchAction([ { action: 'tap', x: 540, y: 738} ])
        // await $('[resource-id="om.plamfy.platform:id/sms_code_input"]').addValue('111111')

        await driver.touchAction([ { action: 'tap', x: 540, y: 738} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await driver.touchAction([ { action: 'tap', x: 153, y: 1728} ])
        await $('android.widget.Button').click()
        await driver.pause(1000)
    },

    async pressBackBtn() {
        await driver.pause(1000)
        await driver.pressKeyCode(4)
    }

}

module.exports = LoginPage