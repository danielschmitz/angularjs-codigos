var app = angular.module('app', []);

app.controller('appController', function ($scope) {
  $scope.usuario = {
    name:"Daniel",
    email:"daniel@gmail.com"
  };
  
});

app.directive('dsCard',function(){
  return {
    template: "Nome: {{usuario.name}} <br/> {{usuario.email}}"
  };
});