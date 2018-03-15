define(function () {
         /**
		 * @function initGlobals
		 * @description initializes required global private variables
		 * @private
		 * @param nil
		 */
        baseSlider=function(){
         return{
        startIndexValidateAndSet:function(cont,val)
           {
             try {
					if (val == null || val == undefined) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Default Minimum Value Property is null or undefined"
						};
					}
					if (isNaN(parseInt(val))) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Invalid data type of Default Minimum Value property"
						};
					}
					if (parseInt(val) < cont.minValue) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Default Minimum Value is less than Minimum Label Value"
						};
					}
					if (parseFloat(val) % cont._graduationInterval !== 0 && (parseFloat(val)!=parseFloat(cont.view.lblBegin.text))) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Not a Step in the Range"
						};
					}
					cont._startIndex = val;
					var leftIndex = ((val - parseInt(cont.minValue)) / cont._graduationInterval) * cont._graduationIntervalInPercentage * parseInt(cont.view.flxContainer.width) / 100 + (cont._sliderOffset * parseInt(cont.view.flxContainer.width) / 100);
					cont.selectedCursor = "left";
                    return leftIndex;
             } catch (exception) {
					if (exception["Error"] == "SliderComponent") {
						alert(JSON.stringify(exception));
					}
                }
           },
         endIndexValidateAndSet:function(cont,val)
         {
           try {
					if (val == null || val == undefined) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Default Maximum Value Property is null or undefined"
						};
					}
					if (isNaN(parseInt(val))) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Invalid data type of Default Maximum Value property"
						};
					}
					if (!(val <= cont._endRange)) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Default Maximum Value  is greater than Maximum Label Value"
						};
					}
					if (parseInt(val) % cont._graduationInterval !== 0 && (parseInt(val)!=parseInt(cont.view.lblEnd.text))) {
						throw {
							"Error": "SliderComponent",
							"Msg": "Not a Step in the Range"
						};
					}
					cont._endIndex = val;
					var rightIndex = ((val - parseInt(cont.minValue)) / cont._graduationInterval) * cont._graduationIntervalInPercentage * cont._containerWidth / 100 + (cont._sliderOffset * cont._containerWidth / 100);
					cont.selectedCursor = "right";
					return rightIndex;
					cont.view.forceLayout();
				} catch (exception) {
					if (exception["Error"] == "SliderComponent") {
						alert(JSON.stringify(exception));
					}
				}
         } ,
           initGlobals:function(cont) {
			cont._beginRange = parseInt(cont.view.lblBegin.text);
			cont._endRange = parseInt(cont.view.lblEnd.text);
			cont.view.lblBegin.isVisible = false;
			cont.view.lblEnd.isVisible = false;
			var widthStr = cont.view.flxContainer.width;
			cont._containerWidth = parseInt(widthStr);
			cont._sliderOffset = parseInt(cont.view.lblBullet1.centerX);
			cont._sliderWidthInPercentage = parseFloat(cont.view.lblLine.width);
			cont._graduationInterval = (cont._endRange - cont._beginRange) / cont._graduations;
			cont._graduationIntervalInPercentage = cont._sliderWidthInPercentage / cont._graduations;
			cont._labelArray = [];
		},
               /**
		 * @function generateDivs
		 * @description generates divisional labels
		 * @private
		 * @param nil
		 */
		generateDivs:function(cont) {
			if (this.validateRange(cont)) {
				cont._interval = (cont._endRange - cont._beginRange) / cont._divisions;
				for (var i = 0; i < (cont._divisions + 1); i++) {
                    var indicatorText=""+parseInt( cont._beginRange + ((i) * cont._interval));
					cont.view.flxContainer.add(this.createLabels(cont,i, cont._interval, cont._divisions,indicatorText));
					cont.view.forceLayout();
				}
			} else {
				alert("Invalid Range");
			}
		},
       
                          /**
		 * @function validateRange
		 * @description Checks is the range is valid or not
		 * @private
		 * @param nil
		 */
		validateRange:function(cont) {
			if (!isNaN(cont._beginRange) && !isNaN(cont._endRange) && cont._endRange > cont._beginRange) {
				return true;
			} else {
				
               alert( {
							"Error": "SliderComponent",
							"Msg": "Slider range invalid."
						});
			}
          return false;
		},
           
               /**
		 * @function createLabels
		 * @description Creates labels and returns to generateDivs
		 * @private
		 * @param i->which label is getting created
		 * @param interval->interval between 2 labels
		 * @param div->number of divisions
		 * @param textDiv->text assigned to division label
            */
		createLabels: function (cont,i, interval, div, textDiv) {
			var visibility;
			if (i === 0 || i === cont._divisions) {
				visibility = true;
			} else {
				visibility = cont._intervalDisplay;
			}
          var valInPer=(i / div) * cont._sliderWidthInPercentage;
			var lblBasic = {
				id: "label" + i,
				skin: "numberLineSkn1",
				text: textDiv + "",
				isVisible: visibility,
				centerX: (cont._sliderOffset +valInPer ) + "%",
				centerY: "87%"
			};
			cont._divArray.push(cont._sliderOffset + valInPer);
			cont._labelCount = cont._divArray.length;
			var lblLayout = {};
			var lblPSP = {};
			var labelDiv = new kony.ui.Label(lblBasic, lblLayout, lblPSP);
			cont._labelArray.push({
				"label": labelDiv,
				"centerX": (cont._sliderOffset + valInPer)
			});
			return (labelDiv);
		},
               /**
		 * @function changeSknNumbers
		 * @description changes skins of the labels between left and right cursors
		 * @private
		 */
		changeSknNumbers: function (cont) {
			for (var i = 0; i <= cont._divisions; i++) {
				var obj = cont._labelArray[i].label;
				obj.skin = "numberLineSkn";
				if (parseFloat(cont.view.flxLeft.centerX) <= parseFloat(obj.centerX) && parseFloat(obj.centerX) <= parseFloat(cont.view.flxRight.centerX)) {
					obj.skin = "numberBlue";
				}
			}
		},
         /**
		 * @function setLblRange
		 * @description changes the lblRange width
		 * @private
		 */
		setLblRange: function (cont) {
			cont.view.lblRange.left = (parseFloat(cont.view.flxLeft.centerX)) + "%";
			cont.view.lblRange.width = ((parseFloat(cont.view.flxRight.centerX)) - parseFloat(cont.view.lblRange.left)).toString() + "%";
		},
                          /**
		 * @function PinIndicatorIsEnabled
		 * @description handles animations for the cursors
		 * @private
		 * @param val, obj1, obj2
		 */
		PinIndicatorIsEnabled: function (val, obj1, obj2) {
			try {
				obj1.isVisible = true;
				obj2.isVisible = true;
				kony.logger.trace("---------------Entering PinIndicatorIsEnabled function---------------", kony.logger.FUNCTION_ENTRY);
				var transformObject1 = kony.ui.makeAffineTransform();
				transformObject1.scale(0, 0);
				var transformObject2 = kony.ui.makeAffineTransform();
				transformObject2.scale(1.2, 1.2);
				var transformObject3 = kony.ui.makeAffineTransform();
				transformObject3.scale(1, 1);
				if (val == null || val == undefined) {
					throw {
						"Error": "Slider",
						"Msg": "Invalid data type argument for PinIndicatorIsEnabled function"
					};
				}
				if (!val) {
					var temp = transformObject1;
					transformObject1 = transformObject3;
					transformObject3 = temp;
				}
				var imgAnim = kony.ui.createAnimation({
						"0": {
							"stepConfig": {
								"timingFunction": kony.anim.EASE
							},
							"transform": transformObject1
						},
						"80": {
							"stepConfig": {
								"timingFunction": kony.anim.EASE
							},
							"transform": transformObject2
						},
						"100": {
							"stepConfig": {
								"timingFunction": kony.anim.EASE
							},
							"transform": transformObject3
						}
					});
				var animConfig1 = {
					"delay": 0.1,
					"iterationCount": 1,
					"fillMode": kony.anim.FILL_MODE_FORWARDS,
					"duration": 0.25
				};
				obj1.animate(imgAnim, animConfig1);
				obj2.animate(imgAnim, animConfig1);
			} catch (exception) {
				alert(JSON.stringify("in exception" + exception));
				kony.logger.error(JSON.stringify(exception), kony.logger.EXCEPTION);
			}
			kony.logger.trace("---------------Exiting PinIndicatorIsEnabled function---------------", kony.logger.FUNCTION_EXIT);
		},
        
         };
};
  return baseSlider;
}
    
      
);