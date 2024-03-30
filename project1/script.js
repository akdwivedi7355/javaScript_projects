const buttons= document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(l){
    l.addEventListener('click',function(e){
        body.style.backgroundColor=e.target.id;
    })
})