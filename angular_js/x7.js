var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope", function($scope){
    $scope.employees = [
        {empno: 1,name:"Zack",sal:5000,deptno:10},
        {empno: 2,name:"Beck",sal:10000,deptno:20},
        {empno: 3,name:"Meow",sal:7000,deptno:30}
    ];

    $scope.doSearch = function(){
        var empID = $scope.searchEmpno;
        for(var i = 0;i<$scope.employees.length;i++){
            if($scope.employees[i].empno == empID){
                $scope.empno = $scope.employees[i].empno;
                $scope.name = $scope.employees[i].name;
                $scope.sal = $scope.employees[i].sal;
                $scope.deptno = $scope.employees[i].deptno;
                break;
            }
        }
            
    };

}]);
