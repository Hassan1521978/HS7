// document.querySelector("#red").onclick = function(){
//     document.querySelector("#demo").style.color = "red";
// }

// document.querySelector("#yellow").onclick = function(){
//     document.querySelector("#demo").style.color = "yellow";
// }

// document.querySelector("#green").onclick = function(){
//     document.querySelector("#demo").style.color = "green";
// }

// ========================================================
// ========================================================
// ========================================================


document.querySelectorAll(".pen").forEach( function(item){

    item.onclick = function(){
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.align;
    }

});