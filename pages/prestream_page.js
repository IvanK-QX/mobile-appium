const PreStreamPage = {

    async allowPermission() {
        await $('android.widget.Button').click()
        await driver.pause(500)
        await $('android.widget.Button').click()
    },

    get permissionBtn() {
        return $('[text="While using the app"]')
    },

    // async allowPermission() {
    //     await $('[text="While using the app"]').click()
    //     await driver.pause(500)
    //     await $('[text="While using the app"]').click()
    // },

    async agreeWithTos() {
        await $('android.widget.CheckBox').click()
        await $('android.widget.Button').click()
    },

    async changeStreamTitle() {
        await $('//android.widget.EditText/android.view.View').click()
        await driver.pause(500)
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
        await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
        await driver.touchAction([ { action: 'tap', x: 95, y: 1876} ])
        await driver.touchAction([ { action: 'tap', x: 969, y: 1860} ])
    },

            // await $('//android.widget.EditText/android.view.View').addValue('lets go party')
        // await $('//android.widget.EditText[@text="Hurry up! We have started yet 🔥"]/android.view.View').addValue('lets go party')

    async tapStartStreamBtn() {
        await $('android.widget.Button').click()
        await driver.pause(500)
        await $('android.widget.Button').click()
        await driver.pause(2000)
    },

    async observeModerationMessage () {
        const text = "Sexual or violent content is strictly prohibited. All violations will be banned. you can contact our Plamfy support Team for any questions and feedback. Have fun!"
        await expect(await $(`[text="${text}"]`)).toHaveText(text)
        await expect(await $(`[text="${text}"]`)).toBeTruthy()
    },

}

module.exports = PreStreamPage