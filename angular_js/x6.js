var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope", 'empService',function($scope,empService){
    $scope.doSearch = function(){
        empService.findEmployeeByID($scope.searchEmpno,function(r){
            $scope.empno = r.empno;
            $scope.name = r.name;
            $scope.sal = r.sal;
            $scope.deptno = r.deptno;
        });
    };
}]);

app.service('empService',function(){
    var employees = [
        {empno: 1,name:"Zack",sal:5000,deptno:10},
        {empno: 2,name:"Beck",sal:10000,deptno:20},
        {empno: 3,name:"Meow",sal:7000,deptno:30}
    ];

    this.findEmployeeByID = function(empID,callback){
        var emp = null;
        for(var i = 0;i<employees.length;i++){
            if(employees[i].empno == empID){
                emp = employees[i];
                break;
            }
        }
        callback(emp);
    };
});

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