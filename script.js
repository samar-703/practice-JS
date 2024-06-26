var rect=document.getElementById("center");

rect.addEventListener("mousemove",function(details){
  
    var rectanglelocation=rect.getBoundingClientRect();
    var insiderect=details.clientX - rectanglelocation.left

    if (insiderect<rectanglelocation.width/2) {
        var redcolor=gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4
        });
    } else {
        var bluecolor=gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width, 0, 255,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4
        });
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})

gsap.from("h1",{
    opacity:0,
    y:-30,
    duration:1.5,
    delay:0.7
})

gsap.from(rect,{
    x:500,
    opacity:0,
    duration:1.5,
    delay:0.7
})