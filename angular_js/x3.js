//one way databinding
var app = angular.module("myApp",[]);
app.controller("myCtrl1",["$scope",function($scope){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doDoubleSum = function(){
        $scope.a = $scope.a * 2;
        $scope.b = $scope.b * 2;
        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    };

    $scope.doSum = function(){
        $scope.sum2 = parseInt($scope.a) + parseInt($scope.b);
    };
}]);