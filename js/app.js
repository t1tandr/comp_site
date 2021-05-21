const header_nav = document.querySelector(".header-nav")
const header_nav_item = document.querySelectorAll(".header-nav-item")
const burger_img = document.querySelector(".menu")
const body = document.querySelector(".body")



function menu_click(){

    header_nav.classList.toggle("header-nav-active")
    // console.log(header_nav_item)


    for( let i = 0; i < header_nav_item.length; i++ ){
        header_nav_item[i].classList.toggle("header-nav-item-active")
    }


    // header_nav_item.classList.toggle("header-nav-item-active")
    // burger_img.classList.toggle("menu-active")
    body.classList.toggle("body-active")
}

