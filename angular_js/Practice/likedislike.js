var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope",function($scope){
    $scope.list = [
        {name:"Apple",like:0,dislike:0},
        {name:"Banana",like:0,dislike:0},
        {name:"Coconut",like:0,dislike:0},
    ];

    $scope.increment = function(item){
        item.like++;
    }

    $scope.decrement = function(item){
        item.dislike--;
    }
}]);