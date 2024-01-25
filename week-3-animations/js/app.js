$(function () {

    // let mouseCursor = $(".cursor");
    // let navLinks = $(".nav-links li");
    //have to use regular javascript to make the cursor work!!
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".nav-links li");
    console.log(navLinks);
    console.log(mouseCursor);
    window.addEventListener("mousemove", cursorMovement);
    // e is event
    function cursorMovement(e) {
        mouseCursor.style.top = e.pageY + "px"
        mouseCursor.style.left = e.pageX + "px"
    }
    navLinks.forEach((link) => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
    });
});
