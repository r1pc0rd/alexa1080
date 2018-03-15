function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var imgLogin = new kony.ui.Image2({
        "centerX": "50%",
        "height": "200dp",
        "id": "imgLogin",
        "isVisible": true,
        "left": "116dp",
        "skin": "slImage",
        "src": "icon_logo.png",
        "top": "2%",
        "width": "200dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flexLogin",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "63dp",
        "skin": "slFbox",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flexLogin.setDefaultUnit(kony.flex.DP);
    var txtUser = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtbox",
        "height": "15%",
        "id": "txtUser",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "42dp",
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "sknTxtbox",
        "text": "johnsmith@gmail.com",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2%",
        "width": "90%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxLine1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLine1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "63dp",
        "skin": "flxLine1",
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLine1.setDefaultUnit(kony.flex.DP);
    flxLine1.add();
    var txtPass = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtbox",
        "height": "15%",
        "id": "txtPass",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "42dp",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "sknTxtbox",
        "text": "johnsmith@gmail.com",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2%",
        "width": "90%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxLine2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLine2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "63dp",
        "skin": "flxLine1",
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLine2.setDefaultUnit(kony.flex.DP);
    flxLine2.add();
    var flexRemMe = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "18%",
        "id": "flexRemMe",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3dp",
        "skin": "slFbox",
        "top": "8%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flexRemMe.setDefaultUnit(kony.flex.DP);
    var lblRemMe = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblRemMe",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel01a01f88aae8e44",
        "text": "Remember me",
        "top": "17dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnRemMe = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknRemMeN",
        "height": "35dp",
        "id": "btnRemMe",
        "isVisible": true,
        "left": "70%",
        "onClick": AS_Button_74ca53c3bc3e41639cf49e9da1b44f28,
        "skin": "sknRemMeN",
        "text": "Button",
        "top": "7dp",
        "width": "65dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": false
    });
    flexRemMe.add(lblRemMe, btnRemMe);
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue0628915c516cb44",
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "60dp",
        "onClick": AS_Button_a683cbbc3ecb4ea892e84d030183038c,
        "skin": "CopyslButtonGlossBlue0628915c516cb44",
        "text": "LOGIN",
        "top": "47dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexLogin.add(txtUser, flxLine1, txtPass, flxLine2, flexRemMe, btnLogin);
    var lblError = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblError",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel0c0b718d14c104b",
        "text": "Bad user name or password",
        "top": "228dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmLogin.add(imgLogin, flexLogin, lblError);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "init": AS_Form_76fc347c108543fe8abce6ccfc385bf3,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_a429641003be4696839551f72e8b08d2,
        "preShow": AS_Form_81877d4d79794f36b10d176859a6619a,
        "skin": "sknFrmBg"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};