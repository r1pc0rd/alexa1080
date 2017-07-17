function loginPostShow(){
 frmLogin.imgLogin.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "2%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE_IN
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 1
            }, {
                "animationEnd": function() {
                              
                }
            });
   frmLogin.flexLogin.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "40%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE_IN
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 1
            }, {
                "animationEnd": function() {
                              
                }
            });
}

function loginPreshow(){
  frmLogin.imgLogin.top="30%";
  frmLogin.flexLogin.top="140%";
}

function onClickRemMe(){
  if(frmLogin.btnRemMe.skin=="sknRemMeN"){
    frmLogin.btnRemMe.skin="sknRemMeF"
    frmLogin.btnRemMe.focusSkin="sknRemMeF"
  }
  else{
    frmLogin.btnRemMe.skin="sknRemMeN"
    frmLogin.btnRemMe.focusSkin="sknRemMeN"
  }
}