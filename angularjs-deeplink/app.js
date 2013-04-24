
$app = angular.module('app',[ ]);

$app.config(function($routeProvider){
	$routeProvider.
	when('/',{controller:listController, templateUrl:'list.html'}).
	when('/edit/:nome',{controller:editController,templateUrl:'form.html'}).
	when('/new',{controller:newController, templateUrl:'form.html'}).
	otherwise({redirectTo:'/'});
});

$app.run(function($rootScope){
	$rootScope.fruits = ["banana","apple","orange"];
});

function listController($scope){

}

function editController($scope,$location,$routeParams){
	$scope.title = "Edit fruit";
	$scope.fruit  = $routeParams.nome;

	$scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

	$scope.save = function(){
		$scope.fruits[$scope.fruitIndex]=$scope.fruit;
		$location.path('/');
	}
}

function newController($scope,$location){
	$scope.title = "New fruit";
	$scope.fruit  = "";

	$scope.save = function(){
		$scope.fruits.push($scope.fruit);
		$location.path('/');
	}
}