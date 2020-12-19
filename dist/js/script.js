

// subscribe_button.addEventListener("click", function moveLeft(){
//     subscribe_button.classList.add("subscribe__button-active");
//
// })

let subscribe_button = document.querySelector(".subscribe__form .subscribe__button");

let x = Math.floor(Number(window.getComputedStyle(subscribe_button).left.slice(0, -2)));
let y = Math.floor(Number(window.getComputedStyle(subscribe_button).right.slice(0, -2)));
function left(){
    subscribe_button.style.right = x + 'px';
}
function moveLeft(){
    while (y!==x){
        left();
        y++;
    }
}


window.onload = function (){
    let circle_button = document.querySelector(".pre-teachers__circle-button");
    let teachers_block = document.querySelector(".teachers");
    circle_button.addEventListener("click", ()=>{
        if(teachers_block.classList.contains("teachers-active")){
            teachers_block.classList.remove("teachers-active")
            circle_button.classList.remove("pre-teachers__circle-button-active");
        } else {
            teachers_block.classList.add("teachers-active")
            circle_button.classList.add("pre-teachers__circle-button-active");
        }
    })
}


let item_titles = document.querySelectorAll(".footer .footer__inner .item__title");
let item_content = document.getElementsByClassName("item__content");
for (let i=0; i<item_titles.length; i++){
    item_titles[i].addEventListener("click", function openClose(){
        if(item_titles[i].classList.contains("item__title-active")){
            item_content[i].classList.remove("item__content-active");
            item_titles[i].classList.remove("item__title-active");

        } else {

            item_titles[i].classList.add("item__title-active");
            item_content[i].classList.add("item__content-active");
        }
    })
}