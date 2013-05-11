

function clientesController($scope,$http)
{
	$scope.rows = null;

	$scope.init = function(){
		$scope.loadAll();
	}

	$scope.loadAll = function(){
		$scope.showLoader();
		$http.get($scope.server("/customers")).success(function(data){
			$scope.rows = data;			
		});
	}

	$scope.init();
}