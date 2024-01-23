const LandingPage = {
    
    async agreePermissions() {
        // await $('android.widget.Button').click()
        await $('[text="AGREE"]').click()
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click()
        await $('//androidx.compose.ui.platform.m1/android.view.View/android.view.View/android.view.View[3]/android.widget.Button').click()
    },

    get agreeBtn () {
        return $('android.widget.Button')
    },

    get allowPermissionBtn() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
    },

    get phoneIcon() {
        return $('//androidx.compose.ui.platform.l1/android.view.View/android.view.View/android.view.View[3]/android.widget.Button')
    }
    
}

module.exports = LandingPage