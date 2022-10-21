function focusEvent(){
    document.getElementById("num").style.background="cornflowerblue";
}
    function f1(){
   alert("CALCULATING THE FUNCTION");
}
function f2(){
    document.getElementById("p1").innerHTML="Mouse Over Event";
}
function f3(){
    document.getElementById("p2").innerHTML="Mouse Out Event";
}
function f4(){
    var i,f;   
    a=document.getElementById("num").value;
    f=1;
    for(i=1;i<=a;i++)
    {
        f = f * i ;
    }
    document.getElementById("fact").innerHTML="factorial of number is : "+f;
}
function f5(){
    b=parseInt(document.getElementById("num").value);
    if(a>0){
        document.getElementById("natural").innerHTML=b+" is a natural number";
    }
    else{
        document.getElementById("natural").innerHTML=b+" is not a natural number";
    }
}
function p() {
     
     var n, i, flag = true;
     n = parseInt(document.getElementById("num").value);
     
     for(i = 2; i <= n - 1; i++)
         if (n % i == 0) {
             flag = false;
             break;}
     if (flag == true){
        document.getElementById("prime").innerHTML="It is a prime number";}
    else{
        document.getElementById("prime").innerHTML="It is not a prime number";
    }

}
function fib(){
     
     var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (document.getElementById("num").value);  
document.getElementById("fib").innerHTML="Fibonacci Series: "; 
for ( i = 1; i <= num; i++)  
{  element=document.createElement('div')
element.innerText=" <br> " +  n1;
todoList=document.getElementById('todo-list');
todoList.appendChild(element);
     
     
    next_num = n1 + n2;  
      
    n1 = n2;   
    n2 = next_num; 

}  


}
        
            var myBtn=document.getElementById("factbtn");
            myBtn.addEventListener("click",f1);
            myBtn.addEventListener("click",f4);
            var myBtnn=document.getElementById("natbtn");
            myBtnn.addEventListener("click",f5);
            myBtnn.addEventListener("click",f1);
            
            var myBtnp=document.getElementById("pribtn");
            myBtnp.addEventListener("click",p);
            myBtnp.addEventListener("click",f1);

            var myBtnf=document.getElementById("fibbtn");
            myBtnf.addEventListener("click",fib);
            myBtnf.addEventListener("click",f1);

            myBtn.addEventListener("mouseover",f2);
            myBtnn.addEventListener("mouseover",f2);
            myBtnp.addEventListener("mouseover",f2);
            myBtn.addEventListener("mouseover",f2);