class PreStreamPage {

    async allowPermission() {
        await $('android.widget.Button').click()
        await $('android.widget.Button').click()
    }

    get permissionBtn() {
        return $('[text="While using the app"]')
    }
    
    async allowPermissions() {
        await $('[text="While using the app"]').click()
    }

    async agreeWithTos() {
        await $('android.widget.CheckBox').click()
        await $('android.widget.Button').click()
    }

}

module.exports = new PreStreamPage()