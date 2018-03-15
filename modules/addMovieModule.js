function addMovie(){
serviceName = "getorAddRecords";
integrationObj = client.getIntegrationService(serviceName);
operationName =  "addMovie";
data= {"deviceId": "","userId": "","movieName": movieNameVal,"KSID": "","playerId": playerId,"playerName": playerNameVal}

headers= {"Content-Type": "application/x-www-form-urlencoded"}
integrationObj.invokeOperation(operationName, headers, data, addMovieSuccess, addMovieFailure);
}
													

function addMovieSuccess(res){
  if(res.result=="Success"){
    
  }
}
function addMovieFailure(res){
  
}