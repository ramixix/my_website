// toggle style switcher
const style_switcher_toggle = document.querySelector(".style-switcher-toggler");
style_switcher_toggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


// Theme Colors
const alternate_styles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternate_styles.forEach((style_element) => {
        if(color == style_element.getAttribute("title")){
            style_element.removeAttribute("disabled");
        }else{
            style_element.setAttribute("disabled", "true");
        }
    });
}


// Theme Light and Dark mode
const day_night = document.querySelector(".day-night");
day_night.addEventListener("click", () => {
    day_night.querySelector("i").classList.toggle("fa-moon");
    day_night.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
    
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        day_night.querySelector("i").classList.add("fa-sun");
    }else{
        day_night.querySelector("i").classList.add("fa-moon");
    }
})