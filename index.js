let menu = document.getElementById("menu");
let closemenu = document.getElementById("close-menu");
let nav = document.getElementById("navigation");
let upBtn = document.getElementById("up-btn");
function openMenu(){
    menu.style.display = 'none';
    closemenu.style.display = 'block';
    nav.style.display = 'flex';
}

function closeMenu(){
    menu.style.display = 'block';
    closemenu.style.display = 'none';
    nav.style.display = 'none';
}

window.onscroll = function(){
    if(scrollY >= 400){
        upBtn.style.display = "block";
    }   
    else{
        upBtn.style.display = "none";
    }
}
upBtn.onclick = function(){
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}