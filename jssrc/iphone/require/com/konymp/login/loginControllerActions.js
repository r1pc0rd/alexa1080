define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_0565b74578ed4af8ba232bf0cd2b9541: function AS_FlexContainer_0565b74578ed4af8ba232bf0cd2b9541(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    AS_FlexContainer_c1889801e50245af819017fdb980bed6: function AS_FlexContainer_c1889801e50245af819017fdb980bed6(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableFacebookLogin");
    },
    AS_FlexContainer_ia857350c99f4ec4b9646fc5da3a88f6: function AS_FlexContainer_ia857350c99f4ec4b9646fc5da3a88f6(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin");
    },
    AS_FlexContainer_b5222b09fbad45b59f22fead2d5f5c1c: function AS_FlexContainer_b5222b09fbad45b59f22fead2d5f5c1c(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    AS_FlexContainer_e0ccf673175e48308c705f8f7b27ba5e: function AS_FlexContainer_e0ccf673175e48308c705f8f7b27ba5e(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableOffice365Login");
    },
    AS_TextField_f2a98e0e28fa4cf7ab5090e88380bb66: function AS_TextField_f2a98e0e28fa4cf7ab5090e88380bb66(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    AS_TextField_35916db09d234cef9beb1541afb1fd67: function AS_TextField_35916db09d234cef9beb1541afb1fd67(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    AS_FlexContainer_40857fa09bd74ab296b13260a335a8c6: function AS_FlexContainer_40857fa09bd74ab296b13260a335a8c6(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    AS_Button_deaad3576fdd45dfb7bd4cea5907d98c: function AS_Button_deaad3576fdd45dfb7bd4cea5907d98c(eventobject) {
        var self = this;
        this.invokeButtonClick();
    },
    AS_FlexContainer_c456c5f9c50e4ba8b9897794f2d70232: function AS_FlexContainer_c456c5f9c50e4ba8b9897794f2d70232(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    AS_FlexContainer_a577f20bc92e4174a07871e987f1aa3d: function AS_FlexContainer_a577f20bc92e4174a07871e987f1aa3d(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    AS_Button_d06dd8aa54a846a7866d73b869fa9829: function AS_Button_d06dd8aa54a846a7866d73b869fa9829(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    AS_Button_bc85595f24bd43e0af7a39e8aadda3c4: function AS_Button_bc85595f24bd43e0af7a39e8aadda3c4(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    AS_Button_fe871ac9bd194551b75bf1f10044f309: function AS_Button_fe871ac9bd194551b75bf1f10044f309(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    AS_FlexContainer_c86710f8599b4a1f8ef335ad57a4a707: function AS_FlexContainer_c86710f8599b4a1f8ef335ad57a4a707(eventobject) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
    }
});