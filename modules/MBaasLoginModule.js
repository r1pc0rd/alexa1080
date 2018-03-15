function initializeKonyMobileFabricClient(){
  try{
        client = new kony.sdk();
        var appkey = "ed8bad12cad2c5da8ecb5487ed291640";
        var appsecret = "955eac069bda283c5703d5e746f3873d";
        var serviceurl = "https://100000117.auth.konycloud.com/appconfig";
        kony.print("******* Initializing MobileFabric Client *******");    
        client.init("ed8bad12cad2c5da8ecb5487ed291640","955eac069bda283c5703d5e746f3873d","https://100000117.auth.konycloud.com/appconfig", initMBSuccess, initMBFailure);
  }
  catch(err)
    {
      //alert(err);
    }
}

function initMBSuccess(response){
  kmsObject = client.getMessagingService();
  setPushCallbacks();
}

function initMBFailure(error){
  alert("error: " + JSON.stringify(error));
}

function PushOperation() {
    serviceName = "SendPush";
    integrationObj = client.getIntegrationService(serviceName);
    operationName = "SendPayLoad";
    data = {"titleVal":movieNameVal,"dataVal":"Playing in "+playerNameVal};//titleVal is a movie name & dataVal is playing area
    headers = {"Content-Type":"application/json"};
    integrationObj.invokeOperation(operationName, headers, data, function(result) {
        if (result.opstatus == 0){
			//alert("Integration success: " + JSON.stringify(result));
      	}    
        },
        function(result) {
           // alert("Integration failure: " + JSON.stringify(result)); 
        });
}


