

function clientesController($scope,$http)
{
	$scope.rows = null;

	$scope.init = function(){
		$scope.loadAll();
	}

	$scope.loadAll = function(){
		$http.get($scope.rootServerUrl + "/customers").success(function(data){
			$scope.rows = data;			
		});
	}

	$scope.init();
}