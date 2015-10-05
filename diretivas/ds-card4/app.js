var app = angular.module('app', []);

app.controller('appController', function ($scope) {
  
  $scope.users = [
      {name:'daniel',email:'daniel@gmail.com'},
      {name:'jose',email:'jose@gmail.com'},
      {name:'pedro',email:'pedro@gmail.com'}
    ]
  
  $scope.user = {name:'',email:''};
  
  $scope.clickAdd = function(){
    $scope.users.push($scope.user);
  }
  
});

app.directive('dsCard',function(){
  return {
    restrict: 'E',
    scope:{
        name : '@',
        email : '@'
    },
    templateUrl: "cardTemplate.html"
  };
});