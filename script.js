// Code goes here

app = angular.module('app', ['angucomplete-alt']);

app.controller('AppCtrl', function($scope, $http) {

  $scope.names = [
    {name: 'Alex', age: 30},
    {name: 'John', age: 20},
    {name: 'Tim robin', age: 25},
    {name: 'Tim', age: 25},
    {name: 'John ', age: 25},
    {name: 'John Smith', age: 25},
    {name: 'Anthony', age: 25}
    ];

  $scope.focusIn = function() {
    $scope.message = 'focus in';
  };
  $scope.focusOut = function() {
    $scope.message = 'focus out';
  };
  $scope.click = function () {
      $scope.show = 'haha';
      console.log('hahahahaha');
  };
});