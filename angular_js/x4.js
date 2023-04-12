//service is a special unit of code which can be used across different controllers
// built in services: $http, $log, $location
// 3 ways to build Custom services: Factory function($scope, calcFactory), Service function($scope, calacService), Provider
// Provider is a wrapper for Factory and service 
// Provider provides more customizable options

var app = angular.module("myApp",[]);
app.controller("myCtrl1",["$scope", "calcFactory", function($scope,calcFactory){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function(){
       $scope.sum2 = calcFactory.getSum($scope.a,$scope.b);
    };
}]);

app.factory('calcFactory',['$http', '$log',function($http,$log){
    $log.log("initializing factory....");
    var oCalcService = {};
    oCalcService.getSum = function(a,b){
        return a+b;
    };
    return oCalcService;
}])