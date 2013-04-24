function appController($scope,$http)
{
	$scope.fruits = Array();

	$scope.getData = function(){
		$http.get("listFruits.html").success(function(data){
			$scope.fruits = data.fruits;
			console.log($scope.fruits);
		}).error(function(data){
			alert("Error...");
			console.log(data);
		});
	}
}