function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flxHeaderCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxHeaderCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox072d81f11981a45",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHeaderCont.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var btnHam = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnHam",
        "height": "50%",
        "id": "btnHam",
        "isVisible": true,
        "left": "4%",
        "skin": "sknBtnHam",
        "text": "Button",
        "top": "0dp",
        "width": "8%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxHam = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHam",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_a1e162d575de4a87878111eb44515b49,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHam.setDefaultUnit(kony.flex.DP);
    flxHam.add();
    var btnMovie = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnMovie",
        "height": "50%",
        "id": "btnMovie",
        "isVisible": true,
        "right": "5%",
        "skin": "sknBtnMovie",
        "text": "Button",
        "top": "0dp",
        "width": "8%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxMovie = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMovie",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_12d0b7ad6a2e452bad34472e9550cc67,
        "right": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxMovie.setDefaultUnit(kony.flex.DP);
    flxMovie.add();
    var flexCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flexCart",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "7%",
        "skin": "slFbox",
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flexCart.setDefaultUnit(kony.flex.DP);
    var imgCart = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "imgCart",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_6.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCart = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50.00%",
        "id": "lblCart",
        "isVisible": true,
        "left": "291dp",
        "skin": "CopyslLabel008df8540e8ce46",
        "text": "3",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1dp",
        "width": "50%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexCart.add(imgCart, lblCart);
    var Label0832e4b2a94fe4e = new kony.ui.Label({
        "centerX": "49.69%",
        "centerY": "50%",
        "id": "Label0832e4b2a94fe4e",
        "isVisible": false,
        "left": "291dp",
        "skin": "CopyslLabel008df8540e8ce46",
        "text": "1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader.add(btnHam, flxHam, btnMovie, flxMovie, flexCart, Label0832e4b2a94fe4e);
    var lblWelcome = new kony.ui.Label({
        "centerX": "50%",
        "height": "15%",
        "id": "lblWelcome",
        "isVisible": true,
        "left": "124dp",
        "skin": "sknLbl1",
        "text": "Welcome",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblName = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblName",
        "isVisible": true,
        "left": "124dp",
        "skin": "skn",
        "text": "John Smith",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeaderCont.add(flxHeader, lblWelcome, lblName);
    var lblMediaServer = new kony.ui.Label({
        "height": "5%",
        "id": "lblMediaServer",
        "isVisible": true,
        "left": "4%",
        "skin": "sknLbl2",
        "text": "Select Media Server",
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
    var flexScrollMedia = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "20%",
        "horizontalScrollIndicator": false,
        "id": "flexScrollMedia",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexScrollMedia.setDefaultUnit(kony.flex.DP);
    var flexServer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexServer1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_427fc4e1ce9c4c2bb3c161477428fe59,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexServer1.setDefaultUnit(kony.flex.DP);
    var flexServerImg1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexServerF",
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
        "skin": "sknLbl3F",
        "text": "Media Server 1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexServer1.add(flexServerImg1, flexServerLbl1);
    var flexServer2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexServer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_49f9f285374e4a2d9e9cc2a83f65ed9a,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexServer2.setDefaultUnit(kony.flex.DP);
    var flexServerImg2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexServerN",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexServerImg2.setDefaultUnit(kony.flex.DP);
    flexServerImg2.add();
    var flexServerLbl2 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexServerLbl2",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Media Server 2",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexServer2.add(flexServerImg2, flexServerLbl2);
    var flexServer3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexServer3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_a4786094406c4f9ea8e3f912e6b967d2,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexServer3.setDefaultUnit(kony.flex.DP);
    var flexServerImg3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexServerN",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexServerImg3.setDefaultUnit(kony.flex.DP);
    flexServerImg3.add();
    var flexServerLbl3 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexServerLbl3",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Media Server 3",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexServer3.add(flexServerImg3, flexServerLbl3);
    var flexServer4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexServer4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c5e99895ec5c45a4a042087e13cf056b,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexServer4.setDefaultUnit(kony.flex.DP);
    var flexServerImg4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexServerN",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexServerImg4.setDefaultUnit(kony.flex.DP);
    flexServerImg4.add();
    var flexServerLbl4 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexServerLbl4",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Media Server 4",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexServer4.add(flexServerImg4, flexServerLbl4);
    var flexServer5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexServer5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_521c246a34d842d3a630a037acc4c606,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexServer5.setDefaultUnit(kony.flex.DP);
    var flexServerImg5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexServerImg5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexServerN",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexServerImg5.setDefaultUnit(kony.flex.DP);
    flexServerImg5.add();
    var flexServerLbl5 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexServerLbl5",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Media Server 5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexServer5.add(flexServerImg5, flexServerLbl5);
    flexScrollMedia.add(flexServer1, flexServer2, flexServer3, flexServer4, flexServer5);
    var CopylblMediaServer0bc983d60aea94e = new kony.ui.Label({
        "height": "5%",
        "id": "CopylblMediaServer0bc983d60aea94e",
        "isVisible": true,
        "left": "4%",
        "skin": "sknLbl2",
        "text": "Select Media Player",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflexScrollMedia04b1717be133b4c = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "20%",
        "horizontalScrollIndicator": false,
        "id": "CopyflexScrollMedia04b1717be133b4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflexScrollMedia04b1717be133b4c.setDefaultUnit(kony.flex.DP);
    var flexPlayer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexPlayer1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_f805b7485c144ca5892ba71a445fd305,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexPlayer1.setDefaultUnit(kony.flex.DP);
    var flexPlayerImg1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexPlayerImg1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexPlayer",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexPlayerImg1.setDefaultUnit(kony.flex.DP);
    flexPlayerImg1.add();
    var flexPlayerLbl1 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexPlayerLbl1",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Player 1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexPlayer1.add(flexPlayerImg1, flexPlayerLbl1);
    var flexPlayer2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexPlayer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_bb6698bec27e446c93993b38a57c79c0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexPlayer2.setDefaultUnit(kony.flex.DP);
    var flexPlayerImg2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexPlayerImg2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexPlayerF",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexPlayerImg2.setDefaultUnit(kony.flex.DP);
    flexPlayerImg2.add();
    var flexPlayerLbl2 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexPlayerLbl2",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3F",
        "text": "Player 2",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexPlayer2.add(flexPlayerImg2, flexPlayerLbl2);
    var flexPlayer3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexPlayer3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_4c389eeab03d4435a26f824eb480c847,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexPlayer3.setDefaultUnit(kony.flex.DP);
    var flexPlayerImg3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexPlayerImg3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexPlayer",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexPlayerImg3.setDefaultUnit(kony.flex.DP);
    flexPlayerImg3.add();
    var flexPlayerLbl3 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexPlayerLbl3",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Player 3",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexPlayer3.add(flexPlayerImg3, flexPlayerLbl3);
    var flexPlayer4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexPlayer4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_f1b42f3722e84723a0b080097ae5dcc2,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexPlayer4.setDefaultUnit(kony.flex.DP);
    var flexPlayerImg4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexPlayerImg4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexPlayer",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexPlayerImg4.setDefaultUnit(kony.flex.DP);
    flexPlayerImg4.add();
    var flexPlayerLbl4 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexPlayerLbl4",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Player 4",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexPlayer4.add(flexPlayerImg4, flexPlayerLbl4);
    var flexPlayer5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexPlayer5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_5e52520b055347e19d611468187550d7,
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%"
    }, {}, {});
    flexPlayer5.setDefaultUnit(kony.flex.DP);
    var flexPlayerImg5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexPlayerImg5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFlexPlayer",
        "top": "10%",
        "width": "80%"
    }, {}, {});
    flexPlayerImg5.setDefaultUnit(kony.flex.DP);
    flexPlayerImg5.add();
    var flexPlayerLbl5 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "flexPlayerLbl5",
        "isVisible": true,
        "left": "29dp",
        "skin": "sknLbl3",
        "text": "Player 5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexPlayer5.add(flexPlayerImg5, flexPlayerLbl5);
    CopyflexScrollMedia04b1717be133b4c.add(flexPlayer1, flexPlayer2, flexPlayer3, flexPlayer4, flexPlayer5);
    var Button0c0c0d42f40884d = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnNextN",
        "height": "7%",
        "id": "Button0c0c0d42f40884d",
        "isVisible": true,
        "left": "63dp",
        "onClick": AS_Button_dcdf54ba8fd2450995c8eae18576d06c,
        "skin": "sknBtnNextN",
        "text": "Next",
        "top": "6%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMain.add(flxHeaderCont, lblMediaServer, flexScrollMedia, CopylblMediaServer0bc983d60aea94e, CopyflexScrollMedia04b1717be133b4c, Button0c0c0d42f40884d);
    var flexNotification = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexNotification",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_9921103bea314fae91b8ae0bb1e0aca1,
        "onTouchEnd": AS_FlexContainer_5dff57d70af64a67a416ba788647600a,
        "skin": "CopyslFbox08f12f98e9f6649",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexNotification.setDefaultUnit(kony.flex.DP);
    var segNotif = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "imgMovie": "imagedrag.png",
            "lblMovieName": "Label",
            "lblPlayer": "Label",
            "lblTime": "Label"
        }, {
            "imgMovie": "imagedrag.png",
            "lblMovieName": "Label",
            "lblPlayer": "Label",
            "lblTime": "Label"
        }, {
            "imgMovie": "imagedrag.png",
            "lblMovieName": "Label",
            "lblPlayer": "Label",
            "lblTime": "Label"
        }],
        "groupCells": false,
        "height": "80%",
        "id": "segNotif",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0735455ea4f254c",
        "rowTemplate": FBox0dad10efc73664a,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "9%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexNotif": "flexNotif",
            "imgMovie": "imgMovie",
            "lblMovieName": "lblMovieName",
            "lblPlayer": "lblPlayer",
            "lblTime": "lblTime"
        },
        "width": "90%",
        "zIndex": 2
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer00d2ad81e33144f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer00d2ad81e33144f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "89%",
        "width": "100%",
        "zIndex": 4
    }, {}, {});
    FlexContainer00d2ad81e33144f.setDefaultUnit(kony.flex.DP);
    var btnClear = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue01d7e20ad775e4c",
        "height": "50dp",
        "id": "btnClear",
        "isVisible": true,
        "left": "82%",
        "onClick": AS_Button_d157b3a95a2e4a80abb92cf17ac77a1b,
        "skin": "CopyslButtonGlossBlue01d7e20ad775e4c",
        "text": "Button",
        "top": "90%",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer00d2ad81e33144f.add(btnClear);
    flexNotification.add(segNotif, FlexContainer00d2ad81e33144f);
    frmHome.add(flexMain, flexNotification);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_2c269163c7a84bd193dd36b6a7bfcd92,
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
        "onDeviceBack": AS_Form_99d55425f4314f0d87ac3566b6ca121b,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmHome.info = {
        "kuid": "770df4a2adc14b46b609fa6a251f9155"
    };
};