$app = angular.module('app',['ngResource']);

$app.config(function($routeProvider){
	$routeProvider.
	when('/',{templateUrl:'view/main.html'}).
	when('/clientes',{templateUrl:'view/clientes/main.html',controller:clientesController}).

	otherwise({redirectTo:'/'});
});

$app.run(function($rootScope){
	$rootScope.rootServerUrl = "http://localhost/";
});