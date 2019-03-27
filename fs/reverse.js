var num=2256;


var no=reverse(num);
console.log(no);


function reverse(rev)
{
    var rev=0;
    var rem=0;

while(num>0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);
}

return rev;
}
