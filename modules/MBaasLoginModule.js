function initializeKonyMobileFabricClient(){
  try{
 client = new kony.sdk();
        var appkey = "41142ec2cc16e67e3a4e84c3d8b7224c";
        var appsecret = "5c4c92a3349c483cc79d563c0f7bf659";
        var serviceurl = "https://100000032.auth.konycloud.com/appconfig";
        kony.print("******* Initializing MobileFabric Client *******");    
        client.init(appkey,appsecret,serviceurl, initMBSuccess, initMBFailure);
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


