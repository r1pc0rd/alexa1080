		/**
		 * Component: Range Slider
		 * Authors: sumeet.bartha@kony.com,vijay.samanthapudi@kony.com  & praharshita.krishna@kony.com
		 */
define(function () {
	var konyLoggerModule = require('com/konymp/slider/konyLogger');
	kony = kony || {};
	kony.logger = new konyLoggerModule("SliderComponent");
	return {
		constructor: function (baseConfig, layoutConfig, pspConfig) {
			this._divisions = 0;
			this._beginRange = 0;
			this._endRange = 0;
			this._divArray = [];
		},
		initGettersSetters: function () {
			defineSetter(this, "divisions", function (divisions) {
				try {
					if (!isNaN(parseInt(divisions)) && (divisions > 0) && (this._graduations % parseInt(divisions)) === 0) {
						this._divisions = parseInt(divisions);
						if (this._graduations === 0) {
							this._graduations = this._divisions;
						}
					} else {
						throw {
							"Error": "Slider",
							"Msg": "Invalid datatype for property Interval Count.Number of Steps must be perfectly divisible by Interval Count"
						};
					}
				} catch (exception) {
					if (exception['Error'] == "Slider") {
						alert(JSON.stringify(exception));
					}
					kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
				}
			});
			defineGetter(this, "divisions", function () {
				return this._divisions;
			});
			defineSetter(this, "intervalDisplay", function (val) {
				this._intervalDisplay = val;
                var singleobj=require('com/konymp/slider/rangeSlider.js');
                 this.obj=singleobj.getObj();
                 this.obj.initGlobals(this);
                 this.obj.generateDivs(this);

});
 			defineGetter(this, "intervalDisplay", function () {
				return this._intervalDisplay;
			});
			defineSetter(this, "graduations", function (val) {
				if (!isNaN(parseInt(val)) && (parseInt(val)) >= 0) {
					this._graduations = parseInt(val);
				} else {
					throw {
						"Error": "Slider",
						"Msg": "Invalid datatype for property Steps"
					};
				}
			});
			defineGetter(this, "graduations", function () {return this._graduations;});
			defineGetter(this, "startIndex", function () {
				kony.logger.trace("----------Entering startIndex Getter---------", kony.logger.FUNCTION_ENTRY);
				return this._startIndex;
			});
			defineSetter(this, "startIndex", function (val) {
				kony.logger.trace("----------Entering startIndex Setter---------", kony.logger.FUNCTION_ENTRY);
			    this.obj.startIndexValidateAndSet(this,val);
			});
			defineGetter(this, "endIndex", function () {
				kony.logger.trace("----------Entering endIndex Getter---------", kony.logger.FUNCTION_ENTRY);
				return this._endIndex;
			});
			defineSetter(this, "endIndex", function (val) {
				kony.logger.trace("----------Entering endIndex Setter---------", kony.logger.FUNCTION_ENTRY);
				this.obj.endIndexValidateAndSet(this,val);
			});
		},

               /**
		 * @function xInPercentages
		 * @description converts x in dp to x in percentages
		 * @private
		 * @param x
		 */
		xInPercentages: function (x) {
			return (x / this._containerWidth * 100);
		},

               /**
		 * @function getSelectedValues (APIs)
		 * @description returns slected values of the slider
		 * @public
		 * @param 
		 */
		getSelectedValues: function () {
			return [this.view.lblIndicatorLeft.text, this.view.lblIndicatorRight.text];
		}
	};
});
