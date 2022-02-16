const menuList = document.getElementById("list-nav")
menuList.style.maxHeight = "0px"

const menuForm = document.getElementById("container-form")
menuForm.className = "hidden-form"





function showMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "200px"
    } else {
        menuList.style.maxHeight = "0px"
    }
}

function hiddenForm() {
    if (menuForm.className == "hidden-form") {
        menuForm.className = "container-form"
    } else {
        menuForm.className = "hidden-form"
    } 
}
