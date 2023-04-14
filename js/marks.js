var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope",function($scope){
    $scope.list=[
        {name: "Apples",marks:50}
    ];

    $scope.add = function(){
        $scope.list.push({name:$scope.n,marks:$scope.m});
    }
}]);


