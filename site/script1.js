var x = "Hello World"
var message = "in global";
console.log("global: message = "+message);
function a(){
    //
}

var b = function(){
    var message = "inside a";
    console.log("a: message = "+message);
}

function compare(y,z){ //parameters should be without var
    return y>z;
}

var c = compare(4,5); //legal
compare(4,"a"); //legal
compare(); //legal

a(); //execute function


//global
var x = 2;
A1();

function A1(){
    var x =5;
    B1();
}

function B1(){
    console.log(x);
}