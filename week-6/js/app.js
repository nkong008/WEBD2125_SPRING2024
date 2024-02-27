$(function () {

    // let mouseCursor = $(".cursor");
    // let navLinks = $(".nav-links li");
    //have to use regular javascript to make the cursor work!!
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".nav-links li");
    let cta = document.querySelector('.cta');
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
            // link.classList.remove("hovered-link");
        });
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            // link.classList.add("hovered-link");
        });
    });


    cta.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
     
    });
    cta.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    
    });

    //gsap stuff starts here 
    const panel = $('.panel');
    const bulb = $('svg#light');
    const para = $('#para');
    const box = $('.box');
    const cTa = $('.cta');

    let tl = gsap.timeline({
        paused: true
    });

    tl.to(panel, 1.5, {
        scaleY: 1,
        height: '100vh',
        ease: Circ.easeOut
    });
    tl.to(bulb, 1, {
        opacity: 1,
        y: 0,
        //delay: 1.8, 
        ease: Bounce.easeOut
    }, 1);
    tl.to(para, 1, {
        opacity: 1,
        y: 20 //,
        // delay: 2.8
    });
    tl.to(box, 3, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    }, '-=2.5')

    cTa.click(function () {
        //tl.play()
        tl.reversed(!tl.reversed());
        if (tl.reversed()) { //you can remove the curlys on the if and else
            tl.reverse();
        } else {
            tl.play();
        }
    })

    let blockquote = $("section#sticky > blockquote");
    let sticky = $("section#sticky");
    let span = $("section#sticky > blockquote > span"); //add more
    let artshow1 = $("img#artshow1.artshow");
    let artshow2 = $("img#artshow2.artshow");
    let box2 = $("section#sticky > div.box");

    function scrollMagicDemo() {
        let tl2 = gsap.timeline({
            onUpdate: upDatePercentage
        });
    
        let tl3 = gsap.timeline();
    
        const controller = new ScrollMagic.Controller();
    
    
        tl2.from(blockquote, 0.5, {
            x:200, opacity: 0
        })
    
        tl2.from (span, 1, {
            width: 0
        },"=-0.5")
    
        tl2.from(artshow1, 1, {
            x:-200,
            opacity:0
        },"=-1")
    
        tl2.from(artshow2, 1, {
            x:200,
            opacity:0
        },"=-0.7")
    
        tl3.from(box2, 1, {
            opacity:0,
            scale: 0
        })
    
        tl3.to(box2, 0.5, {
            left: "20%",
            scale: 1.3,
            borderColor:"white",
            borderWidth:"12",
            boxShadow:"1px 1px 0px 0px rgba(0, 0, 0, .9)"
    
        })
    
        const scene = new ScrollMagic.Scene({
            triggerElement: ".stikcy",
            triggerHook: "onLeave",
            duration: "100%",
        })
        
        .setPin(sticky)
        .setTween(tl2)
        .addTo(controller)
    
    
        // progress is unique to gsap timeline gets and sets a progress 
        function upDatePercentage() {
            tl2.progress();
            console.log(tl2.progress());
    
        }
    
        const scene2 = new ScrollMagic.Scene( {
            triggerElement:blockquote
        })
    
        .setTween(tl3)
        .addTo(controller)
    }

    // let tl2 = gsap.timeline( {
    //     onUpdate: upDatePercentage
    // });

    // let tl3 = gsap.timeline();

    // const controller = new ScrollMagic.Controller();



    // tl2.from(blockquote, 0.5, {
    //     x:200, opacity: 0
    // })

    // tl2.from (span, 1, {
    //     width: 0
    // },"=-0.5")

    // tl2.from(artshow1, 1, {
    //     x:-200,
    //     opacity:0
    // },"=-1")

    // tl2.from(artshow2, 1, {
    //     x:200,
    //     opacity:0
    // },"=-0.7")

    // tl3.from(box2, 1, {
    //     opacity:0,
    //     scale: 0
    // })

    // tl3.to(box2, 0.5, {
    //     left: "20%",
    //     scale: 1.3,
    //     borderColor:"white",
    //     borderWidth:"12",
    //     boxShadow:"1px 1px 0px 0px rgba(0, 0, 0, .9)"

    // })

    // const scene = new ScrollMagic.Scene({
    //     triggerElement: ".stikcy",
    //     triggerHook: "onLeave",
    //     duration: "100%",
    // })
    
    // .setPin(sticky)
    // .setTween(tl2)
    // .addTo(controller)


    // // progress is unique to gsap timeline gets and sets a progress 
    // function upDatePercentage() {
    //     tl2.progress();
    //     console.log(tl2.progress());

    // }

    // const scene2 = new ScrollMagic.Scene( {
    //     triggerElement:blockquote
    // })

    // .setTween(tl3)
    // .addTo(controller)


    // jQuery ends here
    
    // Scroll Trigger DEMO 

    let tl2 = gsap.timeline ({
        scrollTrigger: {
            trigger: sticky,
            marker: true,
            markers: {startColor: "red", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20}
        }
    });

    tl2.from(blockquote, {x: -200, duration: 1})

});



