function login(){
var x = document.getElementById("username").value;
var y = document.getElementById("psd").value;

if(x=="blessan" && y=="54321") {
    alert("loging in");
    open("login.html", "_blank") 
    
}
else{
    alert("Invalid Log");
}

}


function norroom(){
    var a=document.getElementById("non").value;
    var c = 2000*a;
    document.getElementById("nonr").value= c;
}

function inroom(){
    var b=document.getElementById("noi").value;
    var d = 3000*b;
    document.getElementById("noir").value= d;

}

function suiroom(){
    var e=document.getElementById("nos").value;
    var f = 4000*e;
    document.getElementById("nosr").value= f;
}

function sum(){

    var a=document.getElementById("nonr").value;
    var b=document.getElementById("noir").value;
    var c=document.getElementById("nosr").value;
    var s=(a)-(-b)-(-c);
    document.getElementById("bal").value=s;
}



function car1f(){
    var a =document.getElementById("car1").value;
    var d=document.getElementById("car1d").value;
    var c= (4500*a)*d;
    document.getElementById("car1o").value=c;

}

function car2f(){
    var a =document.getElementById("car2").value;
    var d=document.getElementById("car2d").value;
    var c= (7000*a)*d;
    document.getElementById("car2o").value=c;

    
}

function car3f(){
    var a =document.getElementById("car3").value;
    var d=document.getElementById("car3d").value;
    var c= (800*a)*d;
    document.getElementById("car3o").value=c;   
}

function car(){
    var a=document.getElementById("car3o").value;
    var b=document.getElementById("car2o").value;
    var c=document.getElementById("car1o").value;
    var d=a-(-b)-(-c);
    document.getElementById("car").value=d;
}




function breakfast(){
    var x= document.getElementById("f1").value;
    var a= 150*x;
    document.getElementById("f2").value=a; 

}
function lunch(){
    var y=    document.getElementById("f3").value;
    var a= 350*y;
    document.getElementById("f4").value=a;

}
function dinner(){
    var y=    document.getElementById("f5").value;
    var a= 300*y;
    document.getElementById("f6").value=a;
}
 function price(){
     var x=    document.getElementById("f2").value;
     var y=    document.getElementById("f4").value;
     var z=    document.getElementById("f6").value;
     var a = x-(-y)-(-z);
     document.getElementById("f7").value=a;
 }

 




