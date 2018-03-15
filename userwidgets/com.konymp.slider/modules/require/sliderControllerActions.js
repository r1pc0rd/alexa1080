define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_bdd040f43ece4565aaefba3bdd182aee: function AS_FlexContainer_bdd040f43ece4565aaefba3bdd182aee(eventobject, x, y) {
        var self = this;
        //Block Actions
    },
    AS_FlexContainer_h43834a94d2e4b30b8e51f26a670e2c0: function AS_FlexContainer_h43834a94d2e4b30b8e51f26a670e2c0(eventobject, x, y) {
        var self = this;
        //Block Actions
    },
    AS_FlexContainer_07ba05cb1ac846cfa63ea9b3cb45bfad: function AS_FlexContainer_07ba05cb1ac846cfa63ea9b3cb45bfad(eventobject, x, y) {
        var self = this;
        this.selectedCursor = "right";
        this.obj.PinIndicatorIsEnabled(true, this.view.imgPinIndicatorRight, this.view.lblIndicatorRight);
        this.view.forceLayout();
    },
    AS_FlexContainer_b7c5838cd37c4b35bfed7f8ca9b83b2f: function AS_FlexContainer_b7c5838cd37c4b35bfed7f8ca9b83b2f(eventobject, x, y) {
        var self = this;
        this.selectedCursor = "";
        this.obj.PinIndicatorIsEnabled(false, this.view.imgPinIndicatorRight, this.view.lblIndicatorRight);
        this.view.forceLayout();
    },
    AS_FlexContainer_a41ac074956a48729e98564736073c63: function AS_FlexContainer_a41ac074956a48729e98564736073c63(eventobject, x, y) {
        var self = this;
        this.selectedCursor = "left";
        this.obj.PinIndicatorIsEnabled(true, this.view.imgPinIndicator, this.view.lblIndicatorLeft);
        this.view.forceLayout();
    },
    AS_FlexContainer_3b9568e3ddaf4ac5b64f047925075205: function AS_FlexContainer_3b9568e3ddaf4ac5b64f047925075205(eventobject, x, y) {
        var self = this;
        this.selectedCursor = "";
        this.obj.PinIndicatorIsEnabled(false, this.view.imgPinIndicator, this.view.lblIndicatorLeft);
        this.view.forceLayout();
    },
    AS_FlexContainer_b2c4c1126c634935ac6734dd94258577: function AS_FlexContainer_b2c4c1126c634935ac6734dd94258577(eventobject, x, y) {
        var self = this;
        this.obj.onTouchValidate(this, x);
        this.view.forceLayout();
    },
    AS_FlexContainer_ce955f520898487cbedc6503f522cb08: function AS_FlexContainer_ce955f520898487cbedc6503f522cb08(eventobject, x, y) {
        var self = this;
        this.obj.onSnapValidate(this, x);
        this.view.forceLayout();
    },
    AS_FlexContainer_6d242047b5604d789398fffe8c10f3f8: function AS_FlexContainer_6d242047b5604d789398fffe8c10f3f8(eventobject, x, y) {
        var self = this;
        this.onTouchValidate(x);
    },
    AS_FlexContainer_796bb3019ea24d0fb29a556eaee738dc: function AS_FlexContainer_796bb3019ea24d0fb29a556eaee738dc(eventobject, x, y) {
        var self = this;
        this.onSnapValidate(x);
    }
});