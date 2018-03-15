define(['com/konymp/slider/baseSlider.js'],function (baseSlider) {
    class range
    {
         startIndexValidateAndSet(cont,val)
         {
           var leftIndex=baseSlider().startIndexValidateAndSet(cont,val);
           cont.selectedCursor="left";
           this.onTouchValidate(cont,leftIndex);
           this.onSnapValidate(cont,leftIndex);
         }
         endIndexValidateAndSet(cont,val)
         {
          var rightIndex= baseSlider().endIndexValidateAndSet(cont,val);
           cont.selectedCursor="right";
           this.onTouchValidate(cont,rightIndex);
           this.onSnapValidate(cont,rightIndex);
         }  
      initGlobals(cont){
         baseSlider().initGlobals(cont);
       }
       generateDivs(cont){
         baseSlider().generateDivs(cont);
       }
       validateRange(cont){
         baseSlider().validateRange(cont);
       }
        changeSknNumbers(cont)
         {
           baseSlider().changeSknNumbers(cont);
         }
         setLblRange(cont)
         {
           baseSlider().setLblRange(cont);
         }
         PinIndicatorIsEnabled(val, obj1, obj2)
         {
           baseSlider().PinIndicatorIsEnabled(val, obj1, obj2);
         }
 /**
		 * @function onSnapValidate
		 * @description checks if the snap to position is valid or not
		 * @private
		 */
		onSnapValidate (cont,x) {
			var xLeft = parseInt((cont.xInPercentages(x) - cont._sliderOffset) / cont._graduationIntervalInPercentage);
           var diff=(Math.round(parseFloat(cont.view.flxRight.centerX) - parseFloat(cont.view.flxLeft.centerX)));
			if (diff>= (cont._graduationIntervalInPercentage)) {
				this.snapToPosition(cont,x);
			} else {
				if (xLeft >= cont._graduations) {
					xLeft = cont._graduations - 1;
				}
				if (xLeft < 0) {
					xLeft = 0;
				}
				var indicatorTextLeft = ""+parseInt((cont.minValue) + (xLeft) * (cont._graduationInterval)) ;
				var xRight = xLeft + 1;
				var indicatorTextRight =""+parseInt((cont.minValue) + (xRight) * (cont._graduationInterval))  ;
				cont.view.flxLeft.centerX = (cont._sliderOffset + xLeft * cont._graduationIntervalInPercentage) + "%";
				cont.view.lblIndicatorLeft.text = indicatorTextLeft;
				cont.view.flxRight.centerX = (cont._sliderOffset + xRight * cont._graduationIntervalInPercentage) + "%";
				cont.view.lblIndicatorRight.text = indicatorTextRight;
				this.setLblRange(cont);
			}
				this.snapToPosition(cont,x);
		}
                     /**
		 * @function snapToPosition
		 * @description Calculates which step is the closest
		 * @private
		 */
		snapToPosition (cont,x) {
			var rem = (cont.xInPercentages(x) - cont._sliderOffset) % cont._graduationIntervalInPercentage;
			var mid = cont._graduationIntervalInPercentage / 2;
			var tempX;
			if (rem < mid) {
				tempX = cont.xInPercentages(x) - rem;
			} else {
				tempX = cont.xInPercentages(x) + (cont._graduationIntervalInPercentage - rem);
			}
			if (tempX > cont._divArray[cont._divisions]) {
				tempX = cont._divArray[cont._divisions];
			}
			var xClose = parseInt((tempX - cont._sliderOffset) / cont._graduationIntervalInPercentage);
			var indicatorText = ""+parseInt(parseInt(cont.minValue) + parseInt(xClose) * (cont._graduationInterval));
			this.snapLeftOrRight(cont,x, tempX, indicatorText);
            }

               /**
		 * @function snapLeftOrRight
		 * @description snaps left or right depending on which is closest
		 * @private
		 * @param x -in dp,tempX s in percentages,indicatorText -value displayed by indicator
		 */
		snapLeftOrRight (cont,x, tempX, indicatorText) {
          try{
			if (!(tempX < cont._divArray[0] || tempX > cont._divArray[cont._divisions])) {
				var positionCen = tempX + "%";
				var leftIndicator = parseFloat(cont.view.flxLeft.centerX);
				var rightIndicator = parseFloat(cont.view.flxRight.centerX);
				if (Math.abs((tempX) - (leftIndicator)) <= Math.abs((rightIndicator) - tempX)) {
					if (Math.round(rightIndicator - leftIndicator) >= cont._graduationIntervalInPercentage) {
						cont.view.flxLeft.centerX = positionCen;
						cont.view.flxLeft.lblIndicatorLeft.text = indicatorText;
						if (cont.onMinChangeEnd != null || cont.onMinChangeEnd != undefined) {
							cont.onMinChangeEnd([cont.view.lblIndicatorLeft.text, cont.view.lblIndicatorRight.text]);
						}
					}
				} else {
					if (Math.round(rightIndicator - leftIndicator) >= cont._graduationIntervalInPercentage) {
						cont.view.flxRight.centerX = positionCen;
						cont.view.flxRight.lblIndicatorRight.text = indicatorText;
						if (cont.onMaxChangeEnd != null || cont.onMaxChangeEnd != undefined) {
							cont.onMaxChangeEnd([cont.view.lblIndicatorLeft.text, cont.view.lblIndicatorRight.text]);
						}
					}
				}
				cont.view.forceLayout();
				this.changeSknNumbers(cont);
				this.setLblRange(cont);
            }
			}
          catch(e){alert(e);}
		}


               /**
		 * @function onTouchValidate
		 * @description Check if the position is within valid range
		 * @private
        */
      onTouchValidate(cont,x) {
        try{
        if(cont.selectedCursor!=="")
        {
          if (cont.xInPercentages(x) >= cont._labelArray[0].centerX && cont.xInPercentages(x) <= cont._labelArray[cont._divisions].centerX) 
          {
				if (Math.round(Math.abs(parseFloat(cont.view.flxRight.centerX) - parseFloat(cont.view.flxLeft.centerX))) >= (cont._graduationIntervalInPercentage)) {
					this.onTouchSlide(cont,x);
				}
              else {
					var xLeft = parseInt((cont.xInPercentages(x) - cont._sliderOffset) / cont._graduationIntervalInPercentage);
					if (xLeft == cont._divisions) {
						xLeft = xLeft - 1;
					}
					if (xLeft < 0) {
						xLeft = 0;
					}
					var indicatorTextLeft = ""+parseInt(parseInt(cont.minValue) + parseInt(xLeft) * (cont._graduationInterval));
					var xRight = xLeft + 1;
					var indicatorTextRight = ""+parseInt(parseInt(cont.minValue) + parseInt(xRight) * (cont._graduationInterval));
					cont.view.flxLeft.centerX = parseFloat(cont._sliderOffset + xLeft * cont._graduationIntervalInPercentage) + "%";
					cont.view.lblIndicatorLeft.text = indicatorTextLeft.toString();
					cont.view.flxRight.centerX = parseFloat(cont._sliderOffset + xRight * cont._graduationIntervalInPercentage) + "%";
					cont.view.lblIndicatorRight.text = indicatorTextRight.toString();
					cont.obj.setLblRange(cont);
                    cont.selectedCursor="";
				}
        
			} else if (cont.xInPercentages(x) < cont._labelArray[0].centerX) {
				try{
               this.changeSknNumbers(cont);
                this.setLblRange(cont);
				cont.view.flxLeft.centerX = cont._sliderOffset + "%";
				cont.view.forceLayout();
                }
              catch(e)
                {
                  alert("Error");
                }
			}
        }}
        catch(e)
          {}
		}
 
               /**
		 * @function onTouchSlide
		 * @description Slides to the required position if the position is in valid range
		 * @private
		 * @param 
		 */
		onTouchSlide (cont,x) {
			var selectedFlx;
			var centerXPer = cont.xInPercentages(x);
			var indicatorLabel;
			if (cont.selectedCursor === "left") {
				selectedFlx = cont.view.flxLeft;
				indicatorLabel = cont.view.lblIndicatorLeft;
              this.onTouchSlideCulminate(cont,x, centerXPer, selectedFlx, indicatorLabel);
			} else if (cont.selectedCursor === "right") {
				selectedFlx = cont.view.flxRight;
				indicatorLabel = cont.view.lblIndicatorRight;
              this.onTouchSlideCulminate(cont,x, centerXPer, selectedFlx, indicatorLabel);
            }
		}
                     /**
		 * @function onTouchSlideCulminate
		 * @description sets the centerX of the left or right cursor(selectedFlx)
		 * @private
		 * @param 
		 */
		onTouchSlideCulminate (cont,x, centerXPer, selectedFlx, indicatorLabel) {
			if (!(centerXPer < cont._divArray[0] || centerXPer > cont._divArray[this._divisions])) {
				var xClose = Math.round((centerXPer - cont._sliderOffset) / cont._graduationIntervalInPercentage);
				var indicatorText = ""+parseInt(parseInt(cont.minValue) + parseInt(xClose) * (cont._graduationInterval));
					selectedFlx.centerX = centerXPer + "%";
					this.onTouchSlideEventAndLabelHandler(cont,x, indicatorLabel, indicatorText);
					selectedFlx.forceLayout();
			}
			this.setLblRange(cont);
          cont.view.forceLayout();
		}
      
      
               /**
		 * @function onTouchSlideEventAndLabelHandler
		 * @description handles the events and label skin changes
		 * @private
		 * @param x
		 * @param indicatorLabel
		 * @param indicatorText
           */
		onTouchSlideEventAndLabelHandler (cont,x, indicatorLabel, indicatorText) {
			if (cont._bufferSelectedLeft !== null && cont._bufferSelectedLeft !== indicatorText && cont.selectedCursor === "left") {
				indicatorLabel.text = indicatorText;
				cont._bufferSelectedLeft = indicatorText;
				if (cont.onMinChange != null || cont.onMinChange != undefined) {
					cont.onMinChange([cont.view.lblIndicatorLeft.text, cont.view.lblIndicatorRight.text]);
				}
              cont.view.forceLayout();
			} else if (cont._bufferSelectedRight !== null && cont._bufferSelectedRight !== indicatorText && cont.selectedCursor === "right") {
				indicatorLabel.text = indicatorText;
				cont._bufferSelectedRight = indicatorText;
				if (cont.onMaxChange != null || cont.onMaxChange != undefined) {
					cont.onMaxChange([cont.view.lblIndicatorLeft.text, cont.view.lblIndicatorRight.text]);
				}
			}
              this.changeSknNumbers(cont);
              cont.view.forceLayout();
		}


    }
    return {
        getObj:function(){
         return new range();
        }
    };
});