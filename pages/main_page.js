class MainPage {

    get startStreamBtn() {
        return $('android.widget.Button')
    }

    async clickStartStream() {
        await $('android.widget.Button').click()
        await $('android.widget.Button').click()
        
    }

}

module.exports = new MainPage()