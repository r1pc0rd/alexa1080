function getMovies(){
serviceName = "getorAddRecords";
integrationObj = client.getIntegrationService(serviceName);
operationName =  "loadMovies";
data= {}
headers= {}
integrationObj.invokeOperation(operationName, headers, data, loadMoviesSuccess, loadMoviesFailure);

}

function loadMoviesSuccess(res){
  numMovies=res.count;
  if(numMovies==0){
    frmHome.flexCart.setVisibility(false);
  }
  else{
    frmHome.flexCart.setVisibility(true);
  }
  frmHome.lblCart.text=numMovies;
  movieList=res.userMovies;
  moviesTab=[]
  for(i=0;i<movieList.length;i++){
    tempMovie={"lblMovieName":movieList[i]["movieName"],
             			"lblPlayer":movieList[i]["playerName"],
                       "imgMovie":"notification.png"
             		  }
    moviesTab.push(tempMovie)
  }
  
  frmHome.segNotif.setData(moviesTab);
}


function loadMoviesFailure(res){
  
}



function loadMovieList(){
  getMovies();
  if(numMovies>0){
    frmHome.flexNotification.setVisibility(true);
  }
}