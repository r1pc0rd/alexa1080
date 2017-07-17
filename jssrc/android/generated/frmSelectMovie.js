function addWidgetsfrmSelectMovie() {
    frmSelectMovie.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8.75%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox072d81f11981a45",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var btnSearch = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnSearch",
        "height": "50%",
        "id": "btnSearch",
        "isVisible": true,
        "right": "5%",
        "skin": "sknBtnSearch",
        "text": "Button",
        "top": "0dp",
        "width": "8%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMediaServer = new kony.ui.Label({
        "centerY": "50%",
        "height": "40%",
        "id": "lblMediaServer",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLbl2",
        "text": "Select Movie",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader.add(btnSearch, lblMediaServer);
    var FlexContainer0f026156771d54b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0f026156771d54b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f026156771d54b.setDefaultUnit(kony.flex.DP);
    var flxMovie1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_394758d579a6433685e4a279f3ef1ca9,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie1.setDefaultUnit(kony.flex.DP);
    var flexServerImg1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF04fa019b42ed44b",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexServerImg1.setDefaultUnit(kony.flex.DP);
    flexServerImg1.add();
    var flexServerLbl1 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexServerLbl1",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Mad max Fury road",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie1.add(flexServerImg1, flexServerLbl1);
    var flxMovie2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_047512b59e864528b656bf9c4ac9a946,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie2.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg05ff378ce9db04e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg05ff378ce9db04e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF053c7888104814c",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg05ff378ce9db04e.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg05ff378ce9db04e.add();
    var CopyflexServerLbl01ae5000757744b = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl01ae5000757744b",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "The Martian",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie2.add(CopyflexServerImg05ff378ce9db04e, CopyflexServerLbl01ae5000757744b);
    var flxMovie3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ba75dc13bfe94b08a5e20dd498fa6e5d,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie3.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg0f3412ec130e54d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg0f3412ec130e54d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF0fc4140a7859946",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg0f3412ec130e54d.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg0f3412ec130e54d.add();
    var CopyflexServerLbl033f1cc55e28645 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl033f1cc55e28645",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Star Wars",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie3.add(CopyflexServerImg0f3412ec130e54d, CopyflexServerLbl033f1cc55e28645);
    FlexContainer0f026156771d54b.add(flxMovie1, flxMovie2, flxMovie3);
    var CopyFlexContainer0b49209f4936a48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "CopyFlexContainer0b49209f4936a48",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0554b2220249049",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b49209f4936a48.setDefaultUnit(kony.flex.DP);
    var flxMovie4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_36d0cc12c150421fa7df00f06ddbb896,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie4.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg049e850f4820449 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg049e850f4820449",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF088163d818d614f",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg049e850f4820449.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg049e850f4820449.add();
    var CopyflexServerLbl0ec62a9b130ff49 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl0ec62a9b130ff49",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Guardians of the Galaxy",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie4.add(CopyflexServerImg049e850f4820449, CopyflexServerLbl0ec62a9b130ff49);
    var flxMovie5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ffe2b0a5d411481a95df443887d5f0af,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie5.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg0e2d1d604e63640 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg0e2d1d604e63640",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF09a47ee67db1744",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg0e2d1d604e63640.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg0e2d1d604e63640.add();
    var CopyflexServerLbl082d64e61b7d04f = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl082d64e61b7d04f",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Interstellar",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie5.add(CopyflexServerImg0e2d1d604e63640, CopyflexServerLbl082d64e61b7d04f);
    var flxMovie6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_05bf3da3b7f14cf0bedc4bca7b71a839,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie6.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg03ecde0be258943 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg03ecde0be258943",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF0a9719fa3a18949",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg03ecde0be258943.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg03ecde0be258943.add();
    var CopyflexServerLbl01bdc816b57ab4c = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl01bdc816b57ab4c",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Attack of the Herbals",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie6.add(CopyflexServerImg03ecde0be258943, CopyflexServerLbl01bdc816b57ab4c);
    CopyFlexContainer0b49209f4936a48.add(flxMovie4, flxMovie5, flxMovie6);
    var CopyFlexContainer097c8be0300b141 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "CopyFlexContainer097c8be0300b141",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer097c8be0300b141.setDefaultUnit(kony.flex.DP);
    var flxMovie7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_f83ab4ed124a40f7bf2609aa55577255,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie7.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg05a69606cd04e41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg05a69606cd04e41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF0f1545ad7c4a84e",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg05a69606cd04e41.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg05a69606cd04e41.add();
    var CopyflexServerLbl0868bdce9a1334c = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl0868bdce9a1334c",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Shoot Out",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie7.add(CopyflexServerImg05a69606cd04e41, CopyflexServerLbl0868bdce9a1334c);
    var flxMovie8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_05bbdce5dc764cc7ab498e75240d1df2,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie8.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg0d543912c45424f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg0d543912c45424f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF0f485ee0625f746",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg0d543912c45424f.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg0d543912c45424f.add();
    var CopyflexServerLbl0e573cfdbb4284e = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl0e573cfdbb4284e",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Prometheus",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie8.add(CopyflexServerImg0d543912c45424f, CopyflexServerLbl0e573cfdbb4284e);
    var flxMovie9 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie9",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_edde5674356b4f038c1d0b58c1ab537f,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33.30%"
    }, {}, {});
    flxMovie9.setDefaultUnit(kony.flex.DP);
    var CopyflexServerImg017d0b722ea514f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyflexServerImg017d0b722ea514f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "CopysknFlexServerF0c323e6422e8c46",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    CopyflexServerImg017d0b722ea514f.setDefaultUnit(kony.flex.DP);
    CopyflexServerImg017d0b722ea514f.add();
    var CopyflexServerLbl070a4d803e62446 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "CopyflexServerLbl070a4d803e62446",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Serenity",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMovie9.add(CopyflexServerImg017d0b722ea514f, CopyflexServerLbl070a4d803e62446);
    CopyFlexContainer097c8be0300b141.add(flxMovie7, flxMovie8, flxMovie9);
    flexMain.add(flxHeader, FlexContainer0f026156771d54b, CopyFlexContainer0b49209f4936a48, CopyFlexContainer097c8be0300b141);
    frmSelectMovie.add(flexMain);
};

function frmSelectMovieGlobals() {
    frmSelectMovie = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSelectMovie,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmSelectMovie",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrmBg"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmSelectMovie.info = {
        "kuid": "a092a4cb985c460fa34aac3b3e5d2b16"
    };
};