
  $(function(){

    // let mouseCursor =  $('.cursor');
    let mouseCursor = document.querySelector('.cursor');
    // console.log(mouseCursor);

    let navLink = document.querySelectorAll('.nav-links li');
    // console.log(navLinks)
    window.addEventListener("mousemove", cursorMovement);
    function cursorMovement(e) {
        // console.log(e);

        //We need pageY and pageX
        mouseCursor.style.top = e.pageY + "px"; //vanilla js
        // mouseCursor.css({"top": e.pageY + 'px'});
        mouseCursor.style.left = e.pageX + "px"; //vanilla js
        // mouseCursor.css({"left": e.pageX + 'px'});
    }

    navLinks.forEach((link)=> {
        link.addEventListener("mouseOver"), ()=> {
            mouseCursor.classList.add("link-grow");

        }

    });

    link.addEventListener("mouseLeave"), ()=> {
        mouseCursor.classList.remove("link-grow");
    }
  
  });