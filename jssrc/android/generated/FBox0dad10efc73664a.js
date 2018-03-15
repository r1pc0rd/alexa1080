function initializeFBox0dad10efc73664a() {
    FBox0dad10efc73664a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FBox0dad10efc73664a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0dad10efc73664a.setDefaultUnit(kony.flex.DP);
    var flexNotif = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "96%",
        "id": "flexNotif",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox06bf4cdaf0d204d",
        "top": "2%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexNotif.setDefaultUnit(kony.flex.DP);
    var lblMovieName = new kony.ui.Label({
        "height": "25%",
        "id": "lblMovieName",
        "isVisible": true,
        "left": "27%",
        "skin": "CopyslLabel00cb50b32ebdc44",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblPlayer = new kony.ui.Label({
        "id": "lblPlayer",
        "isVisible": true,
        "left": "27%",
        "skin": "CopyslLabel0f2f485ab97a642",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblTime = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTime",
        "isVisible": true,
        "right": "4%",
        "skin": "CopyslLabel0f2f485ab97a642",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "62%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgMovie = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50dp",
        "id": "imgMovie",
        "imageWhileDownloading": "icon_3.png",
        "isVisible": true,
        "left": "4%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "22dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flexNotif.add(lblMovieName, lblPlayer, lblTime, imgMovie);
    FBox0dad10efc73664a.add(flexNotif);
}