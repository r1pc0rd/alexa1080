define(function() {
    var controller = require("com/konymp/slider/usersliderController");
    var actions = require("com/konymp/slider/sliderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "minValue", function(val) {
            this.view.lblBegin.text = val;
        });
        defineGetter(this, "minValue", function() {
            return this.view.lblBegin.text;
        });
        defineSetter(this, "maxValue", function(val) {
            this.view.lblEnd.text = val;
        });
        defineGetter(this, "maxValue", function() {
            return this.view.lblEnd.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});