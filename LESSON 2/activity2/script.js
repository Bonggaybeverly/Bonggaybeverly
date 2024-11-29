document.getElementById("btn_Clear").addEventListener("click",function()
{
let input= document.querySelectorAll("input[type='text']");
input.forEach(function(input){
    input.value="";
});

});