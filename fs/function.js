var num1=90;
var num2=09;

var num3=add(num1,num2);
console.log(num3);

var num4=sub(num2,num1);
console.log(num4);

var num5=multiple(num1,num2);
console.log(num5);

function add(x,y)
{
    z=x+y;
    return z;
}
function sub(x,y)
{
    q=x-y;
    return q;
}
function multiple(x,y)
{
    w=x*y;
    return w;
}
