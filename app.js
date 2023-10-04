var t1 = gsap.timeline()

function time(){
    // var a = 0
    // setInterval(function(){
    //     a++
    //     console.log(a)
    // },100)
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+'%'
        }
        else{
            a=100
            document.querySelector("#loader h1").innerHTML = a+'%'
        }
        
        console.log(a)
    },100)
}
time()


t1.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    color:"white",
    onStart:time(),
    onStart: PlayVideoOnPage2
    
})
t1.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1,
})

t1.from("#nav",{
    opacity:0,
    // y:-10,
    delay:0.1,
    // duration:0.5,
    
    // color:red,
})

t1.from("#nav img,h3 ,h4",{
    y:-80,
    opacity:0,
    // delay:0.4,
    duration:0.1,
    stagger:0.1,
    

})

t1.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true

    }
})




// // Call the GSAP animation function when the page is loaded
// window.addEventListener("load", PlayVideoOnPage2);

// gsap
// t1.from("#left h1",{
//     x:-500,
//     opacity:0,
//     duration:0.5,
//     // delay:0.5,
//     stagger:0.4,
// })
gsap.from("#left h1",{
    // scale:0,
    // opacity:0,
    // duration:1,
    // stagger:0.3,
    // scale:0.5,
    transform:"translateX(-25%)",
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#left h1",
        scroller:"body",
        // markers:true,
        // start : "-10% 65%",
        start:"-280 30%",
        end:"top 0%",
        scrub:3
        // start: "top 65%",
        // start: () => `top ${$("#page2").outerHeight(true)}`,
    // scrub: true,
       
    }

})

// t1.from('#right img',{
//     scale:0.5,
//     opacity:0,
//     duration:0.5,


// } )
gsap.from('#right img',{
    // scale:0,
    // opacity:0,
    // duration:1,
    // stagger:0.3,
    // scale:0.5,
    transform:"translateX(100%)",
    opacity:0,
    // duration:0.1,
    scrollTrigger:{
        trigger:'#right img',
        scroller:"body",
        // markers:true,
        // start : "-10% 65%",
        start:"-280 50%",
        end:"top 0%",
        scrub:3
        // start: "top 65%",
        // start: () => `top ${$("#page2").outerHeight(true)}`,
    // scrub: true,
       
    }

})



//scroll trigger

gsap.from("#page4 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        // markers:true,
        // start : "-10% 65%",
        start:"-250 30%",
        end:"-400 0%",
        scrub:3
        // start: "top 65%",
        // start: () => `top ${$("#page2").outerHeight(true)}`,
    // scrub: true,
       
    }

})

function PlayVideoOnPage2() {
    const video = document.getElementById("my-video");

    // Hide the video initially
    gsap.set(video, { opacity: 0 });

    // Show the video (you can use GSAP to fade it in)
    video.style.display = "block";

    // Use GSAP to fade in and play the video
    gsap.to(video, {
        opacity: 1,
        duration: 1, // Adjust the duration as needed
        onStart: function() {
            // Start playing the video when the animation begins
            video.play();
        },
    });
}