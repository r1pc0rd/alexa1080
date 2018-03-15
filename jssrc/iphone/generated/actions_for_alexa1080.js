//actions.js file 
function AS_Button_bc85595f24bd43e0af7a39e8aadda3c4(eventobject) {
    this.touchCancelAction();
}

function AS_Button_d06dd8aa54a846a7866d73b869fa9829(eventobject) {
    this.touchEnableAction();
}

function AS_Button_deaad3576fdd45dfb7bd4cea5907d98c(eventobject) {
    this.invokeButtonClick();
}

function AS_Button_fe871ac9bd194551b75bf1f10044f309(eventobject) {
    this.cancelTouchID();
}

function AS_FlexContainer_0565b74578ed4af8ba232bf0cd2b9541(eventobject) {
    this.invokeTouchID();
}

function AS_FlexContainer_07ba05cb1ac846cfa63ea9b3cb45bfad(eventobject, x, y) {
    this.selectedCursor = "right";
    this.obj.PinIndicatorIsEnabled(true, this.view.imgPinIndicatorRight, this.view.lblIndicatorRight);
    this.view.forceLayout();
}

function AS_FlexContainer_3b9568e3ddaf4ac5b64f047925075205(eventobject, x, y) {
    this.selectedCursor = "";
    this.obj.PinIndicatorIsEnabled(false, this.view.imgPinIndicator, this.view.lblIndicatorLeft);
    this.view.forceLayout();
}

function AS_FlexContainer_40857fa09bd74ab296b13260a335a8c6(eventobject) {
    this.remembermeSelection();
}

function AS_FlexContainer_6d242047b5604d789398fffe8c10f3f8(eventobject, x, y) {
    this.onTouchValidate(x);
}

function AS_FlexContainer_796bb3019ea24d0fb29a556eaee738dc(eventobject, x, y) {
    this.onSnapValidate(x);
}

function AS_FlexContainer_a41ac074956a48729e98564736073c63(eventobject, x, y) {
    this.selectedCursor = "left";
    this.obj.PinIndicatorIsEnabled(true, this.view.imgPinIndicator, this.view.lblIndicatorLeft);
    this.view.forceLayout();
}

function AS_FlexContainer_a577f20bc92e4174a07871e987f1aa3d(eventobject) {
    if (this.view.lblPassword.top == "23%") {
        this.view.flxLblPassword.isVisible = false;
        this.invokeTouch(this.view.lblPassword, "16%");
    }
    this.view.forceLayout();
}

function AS_FlexContainer_b2c4c1126c634935ac6734dd94258577(eventobject, x, y) {
    this.obj.onTouchValidate(this, x);
    this.view.forceLayout();
}

function AS_FlexContainer_b5222b09fbad45b59f22fead2d5f5c1c(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableGoogleLogin");
}

function AS_FlexContainer_b7c5838cd37c4b35bfed7f8ca9b83b2f(eventobject, x, y) {
    this.selectedCursor = "";
    this.obj.PinIndicatorIsEnabled(false, this.view.imgPinIndicatorRight, this.view.lblIndicatorRight);
    this.view.forceLayout();
}

function AS_FlexContainer_bdd040f43ece4565aaefba3bdd182aee(eventobject, x, y) {
    //Block Actions
}

function AS_FlexContainer_c1889801e50245af819017fdb980bed6(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableFacebookLogin");
}

function AS_FlexContainer_c456c5f9c50e4ba8b9897794f2d70232(eventobject) {
    if (this.view.lblUsername.top == "6%") {
        this.view.flxLblUsername.isVisible = false;
        this.invokeTouch(this.view.lblUsername, "-1%");
    }
    this.view.forceLayout();
}

function AS_FlexContainer_c86710f8599b4a1f8ef335ad57a4a707(eventobject) {
    this.view.flxIdentity.isVisible = false;
    this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
}

function AS_FlexContainer_ce955f520898487cbedc6503f522cb08(eventobject, x, y) {
    this.obj.onSnapValidate(this, x);
    this.view.forceLayout();
}

function AS_FlexContainer_e0ccf673175e48308c705f8f7b27ba5e(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableOffice365Login");
}

function AS_FlexContainer_h43834a94d2e4b30b8e51f26a670e2c0(eventobject, x, y) {
    //Block Actions
}

function AS_FlexContainer_ia857350c99f4ec4b9646fc5da3a88f6(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableLinkedinLogin");
}

function AS_TextField_35916db09d234cef9beb1541afb1fd67(eventobject, changedtext) {
    this.onDoneCredentials(this.view.lblPassword);
}

function AS_TextField_f2a98e0e28fa4cf7ab5090e88380bb66(eventobject, changedtext) {
    this.onDoneCredentials(this.view.lblUsername);
}

function AS_Button_74ca53c3bc3e41639cf49e9da1b44f28(eventobject) {
    onClickRemMe();
}

function AS_Button_a683cbbc3ecb4ea892e84d030183038c(eventobject) {
    frmLogin.lblError["isVisible"] = true;
}

function AS_Button_d157b3a95a2e4a80abb92cf17ac77a1b(eventobject) {
    clearNotif();
}

function AS_Button_dcdf54ba8fd2450995c8eae18576d06c(eventobject) {
    frmSelectMovie.show();
}

function AS_FlexContainer_047512b59e864528b656bf9c4ac9a946(eventobject) {
    onclickMovieName(2);
}

function AS_FlexContainer_05bbdce5dc764cc7ab498e75240d1df2(eventobject) {
    onclickMovieName(8);
}

function AS_FlexContainer_05bf3da3b7f14cf0bedc4bca7b71a839(eventobject) {
    onclickMovieName(6);
}

function AS_FlexContainer_12d0b7ad6a2e452bad34472e9550cc67(eventobject) {
    showNofitications();
}

function AS_FlexContainer_36d0cc12c150421fa7df00f06ddbb896(eventobject) {
    onclickMovieName(4);
}

function AS_FlexContainer_394758d579a6433685e4a279f3ef1ca9(eventobject) {
    onclickMovieName(1);
}

function AS_FlexContainer_427fc4e1ce9c4c2bb3c161477428fe59(eventobject) {
    onclickServer(1);
}

function AS_FlexContainer_49f9f285374e4a2d9e9cc2a83f65ed9a(eventobject) {
    onclickServer(2);
}

function AS_FlexContainer_4c389eeab03d4435a26f824eb480c847(eventobject) {
    onclickPlayer(3)
}

function AS_FlexContainer_521c246a34d842d3a630a037acc4c606(eventobject) {
    onclickServer(5);
}

function AS_FlexContainer_5dff57d70af64a67a416ba788647600a(eventobject, x, y) {
    kony.print("hello");
}

function AS_FlexContainer_5e52520b055347e19d611468187550d7(eventobject) {
    onclickPlayer(5)
}

function AS_FlexContainer_9921103bea314fae91b8ae0bb1e0aca1(eventobject) {
    kony.print("hello");
}

function AS_FlexContainer_a1e162d575de4a87878111eb44515b49(eventobject) {
    frmLogin.txtPass.text = "";
    frmLogin.txtUser.text = "";
    frmLogin.show();
}

function AS_FlexContainer_a4786094406c4f9ea8e3f912e6b967d2(eventobject) {
    onclickServer(3);
}

function AS_FlexContainer_ba75dc13bfe94b08a5e20dd498fa6e5d(eventobject) {
    onclickMovieName(3);
}

function AS_FlexContainer_bb6698bec27e446c93993b38a57c79c0(eventobject) {
    onclickPlayer(2)
}

function AS_FlexContainer_c5e99895ec5c45a4a042087e13cf056b(eventobject) {
    onclickServer(4);
}

function AS_FlexContainer_edde5674356b4f038c1d0b58c1ab537f(eventobject) {
    onclickMovieName(9);
}

function AS_FlexContainer_f1b42f3722e84723a0b080097ae5dcc2(eventobject) {
    onclickPlayer(4)
}

function AS_FlexContainer_f805b7485c144ca5892ba71a445fd305(eventobject) {
    onclickPlayer(1)
}

function AS_FlexContainer_f83ab4ed124a40f7bf2609aa55577255(eventobject) {
    onclickMovieName(7);
}

function AS_FlexContainer_ffe2b0a5d411481a95df443887d5f0af(eventobject) {
    onclickMovieName(5);
}

function AS_Form_21521ecc27b249c89ffbd70643f81d07(eventobject) {
    return false;
}

function AS_Form_2c269163c7a84bd193dd36b6a7bfcd92(eventobject) {
    getMovies();
}

function AS_Form_76fc347c108543fe8abce6ccfc385bf3(eventobject) {
    initializeKonyMobileFabricClient();
}

function AS_Form_81877d4d79794f36b10d176859a6619a(eventobject) {
    loginPreshow();
}

function AS_Form_99d55425f4314f0d87ac3566b6ca121b(eventobject) {
    kony.print("Do nothing");
}

function AS_Form_a429641003be4696839551f72e8b08d2(eventobject) {
    loginPostShow();
    frmLogin.lblError["isVisible"] = false;
}