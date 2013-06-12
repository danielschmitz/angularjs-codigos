
function funcionariosController($scope,$http,$routeParams,$location){

	//lista de funcionarios
	$scope.rows = null;

	//um funcionario
	$scope.row = null;

	$scope.loadAll = function(){
		$scope.showLoader();
		$http.get($scope.server("/employees")).success(function(data){
			$scope.rows = data;			
		});
	}

	$scope.loadRow = function(id){
		
	}

}