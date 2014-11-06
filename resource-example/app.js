var $app = angular.module('app',['ngResource']);

$app.controller("phoneController",function ($scope,$resource){

	var Phone = $resource("/phones/:phoneId");

	$scope.getPhoneById = function(){
		Phone.get({phoneId:$scope.idPhone},function(data){
			$scope.phone=data;
		});
	}

	$scope.getPhones = function(){
		Phone.query(function (data){
			scope.phones = data;
		});
	}


	$scope.savePhone = function(){
		p = new Phone();
		p.number="1111-2222"
		p.$save();
	}

	$scope.deletePhone = function(){
		Phone.delete({phoneId:10});
	}

});