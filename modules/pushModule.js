function setPushCallbacks() {
	var callbacks = {
		onsuccessfulregistration: regSuccess,
		onfailureregistration: regError,
		onlinenotification: onlinenotification,
		offlinenotification: offlinenotification,
		onsuccessfulderegistration: deregSuccess,
		onfailurederegistration: deregFailure
	};
	kony.push.setCallbacks(callbacks);
    registerPush();
}

function registerPush() {
      var config;
		if(kony.os.deviceInfo().name === "iPhone") {
			 config = [0, 1, 2];			
		} else {
			config = {senderid: "404858849718"};
		}
		
		try {
			kony.push.register(config);
		}
		catch(err){
			kony.print(err);
		}
}

function regSuccess(ident) {
	var info = kony.os.deviceInfo();
    deviceID = info.deviceid;
    if(kony.os.deviceInfo().name === "iPhone"){
		kmsObject.register("iphone", deviceID, ident, "Alexa", registerSubscriberPushCallback, failureCallback);
	}
	else {
		kmsObject.register("androidgcm", deviceID, ident, "demo@kony.com", registerSubscriberPushCallback, failureCallback);
	}
}

function registerSubscriberPushCallback(response) {
	//alert(JSON.stringify(response));
}

function regError(error) {
	//alert(JSON.stringify(error));
}

function onlinenotification(pushMsg) {
  
	if(kony.os.deviceInfo().name=="android")
	{
		promotionPushName=pushMsg["content"];
        promotionPushTitle=pushMsg["PlayerName"];
	}
	else
	{
		if(typeof(pushMsg.alert) == "string")
			promotionPushName=pushMsg.alert;
		else
			promotionPushName=pushMsg.alert.body;
	}
  
  var pspConfig = {"iconPosition" : constants.ALERT_CONTENT_ALIGN_LEFT,"contentAlignment":constants.ALERT_ICON_POSITION_CENTER } ;
  var alert = kony.ui.Alert({
  "message": promotionPushName,
  "alertType": constants.ALERT_TYPE_INFO,
  "alertTitle": promotionPushTitle,
  "yesLabel": "OK",
  "noLabel": "Cancel",
  "alertIcon": "notificationimg.png",
  "alertHandler": null
  }, 
  pspConfig);
}


function offlinenotification(pushMsg) {

	if(kony.os.deviceInfo().name=="android")
	{
		promotionPushName=pushMsg["content"];
        promotionPushTitle=pushMsg["PlayerName"];
	}
	else
	{
		if(typeof(pushMsg.alert) == "string")
			promotionPushName=pushMsg.alert;
		else
			promotionPushName=pushMsg.alert.body;
	}
    var pspConfig = {"iconPosition" : constants.ALERT_CONTENT_ALIGN_LEFT,"contentAlignment":constants.ALERT_ICON_POSITION_CENTER } ;
    var alert = kony.ui.Alert({
    "message": promotionPushName,
    "alertType": constants.ALERT_TYPE_INFO,
    "alertTitle": promotionPushTitle,
    "yesLabel": "OK",
    "noLabel": "Cancel",
    "alertIcon": "notificationimg.png",
    "alertHandler": null
    }, 
    pspConfig);
  
}

function deregisterPush() {
	kony.push.deRegister({});
}

function deregSuccess() {
	kmsObject.unregister(unregisterSubscriberPushCallback, deregfailureCallback);
}

function unregisterSubscriberPushCallback(response) {
 	alert(JSON.stringify(response));
}

function deregFailure(error) {
	alert(JSON.stringify(error));
}

function deregfailureCallback(err){
	alert(JSON.stringify(err));
}

function failureCallback(err){
	alert(JSON.stringify(err));
}