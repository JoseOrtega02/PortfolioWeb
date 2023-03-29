const menuBTN = document.getElementById("btn-menu")

const menu = document.getElementById("divmenu")

menuBTN.addEventListener('click',()=>{
    const menu = document.getElementById("divmenu")
     menu.classList.toggle('close');
     if(menu.classList == "close"){
        menuBTN.innerHTML = '<i class="fa-solid fa-bars"></i>'
     }else{
        menuBTN.innerHTML = '<i class="fa-solid fa-x"></i>'
     }
    console.log(menu)
})








// const allnavitems = document.querySelectorAll('.navmenu ul li a')

// allnavitems.forEach((item, i) => {
// item.addEventListener("mouseover",function(e) {
//     for(var j=0;j<i;j++){
//         allnavitems[j].firstChild.classList.add("slide-out-top")
//     }

//     this.firstChild.classList.add("slide-out")
//     for(var k=i+1;k < allnavitems.length;k++) {
//         allnavitems[k].firstChild.classList.add("slide-out-bottom")
//     }
// })
// item.addEventListener("mouseout",function(e) {
//     for(var j=0;j<i;j++){
//         allnavitems[j].firstChild.classList.remove("slide-out-top")
//     }
//     this.firstChild.classList.remove("slide-out")
//     for(var k = i+1; k < allnavitems.length; k++){
//         allnavitems[k].firstChild.classList.remove("slide-out-bottom")
//     }
// })
// })