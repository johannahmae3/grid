var input = document.querySelector("input");
var button = document.querySelector("button");
var td= document.querySelectorAll("td");
button.addEventListener("click", function(e)
{
function table(){
    cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
    cell.style.backgroundColor = 'black';
}
var cell;
var x = 1; 
var y = 1;
var limit = input.value;
{
    for(var i=0; i<td.length;i++){
        td[i].style.backgroundColor="";
    }
     do{
        x++;
        table();
    }while(x < limit);
     do{
        y++;
        table();
    }while(y < limit);
    do{
        x--;
        table();  
    }while(x > 1);
    do{
        y--;
        table(); 
    }while(y > 1);
}   

})

//     var input = document.querySelector("input");
//     var button = document.querySelector("button");
//     button.addEventListener("click", function()
// {
//  console.log(input.value);
//     var x = 1;
//     var y = 1;
//     var display = 0;
//     var cell;
//     var counter = 0;
//     var limit = input.value;
//     while (x < limit){
//         cell = document.querySelector('tr:nth-of-type('+1+') td:nth-of-type('+x+')');
//         console.log(cell)
//         cell.style.backgroundColor = 'black'; 
//         x++;
//         counter++;
//     }
//     if(y < limit){
//         cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+limit+')');
//         console.log(cell)
//         cell.style.backgroundColor = 'black';
//         y++;
//     }
// })

   