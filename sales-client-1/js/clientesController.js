

function clientesController($scope,$http)
{
	$scope.rows = null;

	//Pagination
	$scope.currentPage = 0;
	$scope.pageSize = 15;

	$scope.numberOfPages =function(){
		return Math.ceil($scope.rows.length/$scope.pageSize);                
	}

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