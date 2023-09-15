"use strict"

var content = document.getElementsByClassName("contents")
var buttons = document.getElementsByTagName("button")

//Paslepia turinį
for(var i = 0; i < content.length; i++){
    content[i].style.display = "none"
}

function showTab(evt, id){
    for(var i = 0; i < content.length; i++){
        content[i].style.display = "none"
       content[i].classList.remove("active")
    }

    // Parodo elementus su Id klase
    document.getElementById(id).style.display = "block"

}


    //nepavyko grąžinti turinio į vidurį
// content.addEventListener("click", function(){
//     content.classList.toggle("translate")
//     contents.classList.toggle("translate")
// })


// Paprastas Variantas
// var content = document.getElementsByClassName("contents")
// // var content = document.getElementsByClassName("paveikslas")
//     
// for(var i = 0; i < content.length; i++){
//     content[i].style.display = 'none'
// }
// function showTab(evt,id){           
// for(var i = 0; i < content.length; i++){
//         content[i].style.display = 'none'
// }
//      // Show tab with specific id
//     document.getElementById(id).style.display = 'block'
// }

