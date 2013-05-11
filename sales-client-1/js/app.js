
SERVER_URL = "http://localhost/sales-server";

$app = angular.module('app',['ngResource']);

$app.config(function($routeProvider,$httpProvider){
	$routeProvider.
	when('/',{templateUrl:'view/main.html'}).
	when('/clientes',{templateUrl:'view/clientes/main.html',controller:clientesController}).
	otherwise({redirectTo:'/'});

	//RESPONSE interceptor
	$httpProvider.responseInterceptors.push(function($q,$rootScope) {
		return function(promise) {
			//Always disable loader
			$rootScope.hideLoader();
			return promise.then(function(response) {
			      // do something on success
			      return(response);
			  }, function(response) {
			      // do something on error
			      $data = response.data;
			      $error = $data.error;
			      console.error($data);
			      if ($error && $error.text)
			      	alert("ERROR: " + $error.text);
			      else{
			      	if (response.status=404)
			      		alert("Erro ao acessar servidor. Página não encontrada. Veja o log de erros para maiores detalhes");
			      	else
			      		alert("ERROR! See log console");
			      }


			      return $q.reject(response);
			  });
		}
	});
});	

$app.run(function($rootScope){

	

	$rootScope.showLoaderFlag = false;
	
	$rootScope.showLoader=function(){
		$rootScope.showLoaderFlag=true;
	}
	$rootScope.hideLoader=function(){
		$rootScope.showLoaderFlag=false;
	}

	$rootScope.server=function(url){
		return SERVER_URL + url;
	}

});


