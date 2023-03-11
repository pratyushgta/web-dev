/// <referene path="angular.min.js" />
var myApp = angular.module("myModule",[]);

/*var myController = function($scope){
    $scope.message = "HelloWorld";
};

myApp.controller("myController",myController);*/

var myController2 = function($scope){
    var items = {
        name: "Potatoes",
        price: "500",
        code: "PTO",
    };
}

myApp.controller("myController",myController2);