// Code goes here

app = angular.module('app', ['angucomplete-alt']);

app.controller('AppCtrl', function($scope, $http) {

  $scope.click = function () {
    console.log($scope.testObj.title);
    var searchStr = $scope.testObj.title;
    $http({
        method: 'GET',
        url: 'http://10.96.97.227:8086/kg/?' + searchStr
    }).success(function successCallback(res) {
        console.log('Success call back.');
        console.log(res);
        if(res.records.length == 0){
          $scope.results = 'NO RESULTS!';
        } else {
            $scope.isTrue = true;
            $scope.results = res.records;
        }

    }, function errorCallback(err) {
        console.log('Error call back');
        console.log(err);
    })
  };
});