function f1()
{
     var x = document.getElementById("t1").value;
     var y = document.getElementById("t2").value;
     var i = document.getElementById("se").value;
     var z ;

     switch(i)
     {
        case'a':
        z=parseInt(x)+parseInt(y);
        break;
        case'b':
        z=parseInt(x)-parseInt(y);
        break;
        case'c':
        z=parseInt(x)*parseInt(y);
        break; 
        case'd':
        z=parseInt(x)/parseInt(y);
        break;    }
   var txt;
   if(confirm("pressed button"))
   { txt="you pressed ok"
   document.getElementById("r").value=z;}
   else{txt="you pressed cancel"
   document.getElementById("q").innerHTML=txt;}
     }