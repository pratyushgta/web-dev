var app = angular.module("myApp",[]);
app.controller("myCtrl",['$scope',function($scope){
    $scope.items = [
        {name:"Apples",qty:"50",price:400},
        {name:"Coconuts",qty:"50",price:600},
        {name:"Bananas",qty:"50",price:500}
    ];

    $scope.cart=[];

    $scope.add = function(product){
        var existing = $scope.cart.find(function(item){
            return item.name===product.name;
        });
        if(existing){
            existing.qty++;
        }else{
        $scope.cart.push({name: product.name, qty: 1, price: product.price})
        }
    }

    $scope.remove = function(product){
        var index = $scope.cart.indexOf(product);
        $scope.cart.splice(index,1);
    }

    $scope.totalrate = function(product){
        var index = $scope.cart.indexOf(product);
        var item = $scope.cart[index];
        return item.price*item.qty;
        
    };

    $scope.checkout = function(){
        var total =0.0;
        for(var i=0;i<$scope.cart.length;i++){
            var item = $scope.cart[i];
            total+=item.price*item.qty;
        }

        /*angular.forEach($scope.cart, function(item) {
            total += (item.qty * item.price);
          });*/
        return total;
    }
}]);