class LandingPage {
    get agreeBtn () {
        return $('android.widget.Button')
    }

    get allowPermissionBtn() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
    }


}

module.exports = new LandingPage()