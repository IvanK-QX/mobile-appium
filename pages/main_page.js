class MainPage {

    get startStreamBtn() {
        return $('android.widget.Button')
    }

    async clickStartStream() {
        await $('android.widget.Button').click()
        await $('android.widget.Button').click()
    }

    //add profile 
        // const name = `APPIUM${Math.floor(Math.random() * (999999 - 100000) + 100000)}`
        // await $('//android.widget.ScrollView/android.widget.EditText[1]/android.view.View').addValue(name)
        // await $('//android.widget.ScrollView/android.widget.EditText[2]/android.view.View').addValue(`${name}@email.com`)
        
        // await $('[content-desc="08 January 2006"]').click()
        // await $('[resource-id="android:id/button1"]').click()
        // await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button').click()
        // await driver.pause(1000)
        // await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])

}

module.exports = new MainPage()