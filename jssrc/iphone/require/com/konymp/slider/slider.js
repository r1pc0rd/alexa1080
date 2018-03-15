define(function() {
    return function(controller) {
        var slider = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "15%",
            "id": "slider",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopysliderBackground3",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        slider.setDefaultUnit(kony.flex.DP);
        var flxBlocker = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "22%",
            "clipBounds": true,
            "height": "46%",
            "id": "flxBlocker",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onTouchMove": controller.AS_FlexContainer_h43834a94d2e4b30b8e51f26a670e2c0,
            "onTouchStart": controller.AS_FlexContainer_bdd040f43ece4565aaefba3bdd182aee,
            "skin": "sknFlxBlocker",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxBlocker.setDefaultUnit(kony.flex.DP);
        flxBlocker.add();
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onTouchEnd": controller.AS_FlexContainer_ce955f520898487cbedc6503f522cb08,
            "onTouchMove": controller.AS_FlexContainer_b2c4c1126c634935ac6734dd94258577,
            "skin": "CopyCopyslFbox08b0f87ab967448",
            "top": "0dp",
            "width": "375dp",
            "zIndex": 2
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var lblLine = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "65%",
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "skin": "CopyCopylineSkn2",
            "width": "78%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBullet1 = new kony.ui.Label({
            "centerX": "9.50%",
            "centerY": "65%",
            "height": "8dp",
            "id": "lblBullet1",
            "isVisible": true,
            "skin": "sknBulletGray",
            "width": "8dp",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBullet2 = new kony.ui.Label({
            "centerX": "88.50%",
            "centerY": "65%",
            "height": "8dp",
            "id": "lblBullet2",
            "isVisible": true,
            "skin": "sknBulletGray",
            "width": "8dp",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBegin = new kony.ui.Label({
            "centerX": "10%",
            "centerY": "87%",
            "id": "lblBegin",
            "isVisible": true,
            "skin": "numberLineSkn",
            "text": "0",
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
        var lblEnd = new kony.ui.Label({
            "centerX": "86%",
            "centerY": "87%",
            "id": "lblEnd",
            "isVisible": true,
            "skin": "numberLineSkn",
            "text": "100",
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
        var lblRange = new kony.ui.Label({
            "centerY": "65%",
            "height": "1dp",
            "id": "lblRange",
            "isVisible": true,
            "left": "9.10%",
            "skin": "lblSkinRange",
            "width": "38%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "88.50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "45%",
            "onTouchEnd": controller.AS_FlexContainer_b7c5838cd37c4b35bfed7f8ca9b83b2f,
            "onTouchStart": controller.AS_FlexContainer_07ba05cb1ac846cfa63ea9b3cb45bfad,
            "skin": "CopyCopyCopyslFbox0e20c0977bba540",
            "top": "0%",
            "width": "55dp",
            "zIndex": 5
        }, {}, {});
        flxRight.setDefaultUnit(kony.flex.DP);
        var lblIndicatorRight = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "21%",
            "id": "lblIndicatorRight",
            "isVisible": false,
            "skin": "sliderNumber",
            "text": "-999",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgPinIndicatorRight = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "25%",
            "height": "35dp",
            "id": "imgPinIndicatorRight",
            "isVisible": false,
            "skin": "CopyCopyslImage3",
            "src": "currentpin.png",
            "top": "77dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var CopyflxSlider0ff90e698dadf43 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "65%",
            "clipBounds": true,
            "height": "25dp",
            "id": "CopyflxSlider0ff90e698dadf43",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyslFbox08db4811f0c1b46",
            "width": "25dp",
            "zIndex": 1
        }, {}, {});
        CopyflxSlider0ff90e698dadf43.setDefaultUnit(kony.flex.DP);
        CopyflxSlider0ff90e698dadf43.add();
        flxRight.add(lblIndicatorRight, imgPinIndicatorRight, CopyflxSlider0ff90e698dadf43);
        var flxLeft = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "7.50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "45%",
            "onTouchEnd": controller.AS_FlexContainer_3b9568e3ddaf4ac5b64f047925075205,
            "onTouchStart": controller.AS_FlexContainer_a41ac074956a48729e98564736073c63,
            "skin": "CopyCopyCopyslFbox0e20c0977bba540",
            "top": "0%",
            "width": "55dp",
            "zIndex": 5
        }, {}, {});
        flxLeft.setDefaultUnit(kony.flex.DP);
        var lblIndicatorLeft = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "22%",
            "id": "lblIndicatorLeft",
            "isVisible": false,
            "skin": "sliderNumber",
            "text": "-999",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgPinIndicator = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "25%",
            "height": "35dp",
            "id": "imgPinIndicator",
            "isVisible": false,
            "skin": "CopyCopyslImage3",
            "src": "currentpin.png",
            "top": "77dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSlider = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "65%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxSlider",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopyslFbox08db4811f0c1b46",
            "width": "25dp",
            "zIndex": 1
        }, {}, {});
        flxSlider.setDefaultUnit(kony.flex.DP);
        flxSlider.add();
        flxLeft.add(lblIndicatorLeft, imgPinIndicator, flxSlider);
        var lblBlueSkinPersistent = new kony.ui.Label({
            "id": "lblBlueSkinPersistent",
            "isVisible": false,
            "left": "130dp",
            "skin": "numberBlue",
            "text": "Label",
            "top": "59dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxContainer.add(lblLine, lblBullet1, lblBullet2, lblBegin, lblEnd, lblRange, flxRight, flxLeft, lblBlueSkinPersistent);
        var flxback = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "72%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onTouchEnd": controller.AS_FlexContainer_796bb3019ea24d0fb29a556eaee738dc,
            "onTouchMove": controller.AS_FlexContainer_6d242047b5604d789398fffe8c10f3f8,
            "skin": "sknFlxBGffffffff3",
            "top": "27dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxback.setDefaultUnit(kony.flex.DP);
        flxback.add();
        slider.add(flxBlocker, flxContainer, flxback);
        return slider;
    }
})