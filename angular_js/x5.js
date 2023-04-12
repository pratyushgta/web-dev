var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope", '$http',"$log",function($scope,$http,$log){
    $scope.a = 10;
    $scope.b = 20;
   

    $scope.doSum = function(){
        $http({
            url: 'http://localhost:5500/Sum?a='+$scope.a+'&b='+$scope.b,
            method:'GET'
        }).then(function(resp){
            //success function
            $scope.sum = resp.data;     
        },function(resp){
            //failure function
            $log.error("ERROR occured");
            debugger;
        });
    };
}]);

/*app.service('empService',['$http','$log',function($http,$log){
    this.findEmployeeID = function(empno,cb){
        $http({
            url: 'http://localhost:5500/Sum?a='+$scope.a+'&b='+$scope.b,
            method:'GET'
        }).then(function(resp){
            //success function
            $scope.sum = resp.data;     
        },function(resp){
            //failure function
            $log.error("ERROR occured");
            debugger;
        });
    };
}]);*/