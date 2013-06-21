
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
		$scope.showLoader();
		$http.get($scope.server("/employee/"+id)).success(function(data){
			$scope.row = data;
			$scope.row.isUpdate = true;
		});
	}

	$scope.save = function(){
		$scope.showLoader();
		$http.post($scope.server("/employee/"),$scope.row).success(function(data){
			alert("Salvo com sucesso");
			$scope.loadAll();
		});
	}

	$scope.new = function(){
		$scope.row = {
			EmployeeID:0,
			FirstName:"",
			LastName:"",
			HomePhone:""
		}
	}

	

}