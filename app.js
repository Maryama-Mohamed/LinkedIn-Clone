

let profileMenu = document.getElementById("profileMenu");

function toggleMenu(){

    profileMenu.classList.toggle("open-menu");

}

let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink= document.getElementById("show-more-link");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show Less <b>-</b>";
    }else{
        moreLink.innerHTML = "Show More <b>+</b>"
    }
}
