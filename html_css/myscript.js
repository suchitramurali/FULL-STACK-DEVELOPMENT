
        function read()
        {
            var x=parseInt(document.getElementById("no").value);
            var y=parseInt(document.getElementById("noo").value);
            var op=document.getElementById("operation").value;
            console.log(x);
            console.log(y);
            
            var z=0;
            if(op=="addition")
            {
                z=x+y;
            }
            else if(op=="subtraction")
            {
                z=x-y;
            }
            else if(op=="multiplication")
            {
                z=x*y;
            }
            else if(op="division")

            {
                z=x/y;
            }
            console.log(z);
            document.getElementById("result").innerHTML="<b>"+z+"<b>";
        }