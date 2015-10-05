var app = angular.module('app', []);

app.controller('appController', function ($scope) {
  
    
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