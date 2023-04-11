var app = angular.module('myApp', []);
app.controller('myCtrl2',["$scope",function(c){
    c.name="Apples";
}]);
app.controller('myCtrl3',[function(){
    this.name="Bananas";
}]);

app.controller('myCtrl', function ($scope) {
    //PART 1
    $scope.name = "World";

    $scope.getSal = function(){
        return (10*$scope.sal);
        
    }
    //PART2
    $scope.getSum = function () {
        return (parseFloat($scope.a) + parseFloat($scope.b));
    }
    //PART 3
    $scope.todolist = [
        { text: 'learn AngularJS', done: true },
        { text: 'build Angular app', done: false },
    ];

    $scope.addTo = function () {
        $scope.todolist.push({ text: $scope.addText, done: false });
        $scope.add = '';
    }

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todolist, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    //PART 7
    $scope.image = [
        {href: 'NMIMS_logo.png',likes: 0, dislikes: 0},
        {href: 'NMIMS_logo.png',likes: 0, dislikes: 0}
    ];

    $scope.increment_l = function(img){
        img.likes++;
    }
    $scope.increment_d = function(img){
        img.dislikes++;
    }
    
});