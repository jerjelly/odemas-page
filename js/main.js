function onInit () {
    console.log("here ");

    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline() 
        .from(".left-main-secction", { 
            duration: 0.5,
            // x: -500,
            opacity: 0,
            xPercent: -100
        })
        .from(".brands-container div", {y:160, stagger:0.1, duration:0.5, ease:"back"})
        //.from(".who-content", {x: -100})

      
     gsap.from(".who-we-are-title", {yPercent: -200, scrollTrigger: '.who-we-are-title', opacity: 0 })   
     gsap.from(".who-text", {xPercent: -100, scrollTrigger: '.who-text', duration:0.5})
     gsap.from(".img-who", {opacity: 0, scale:0, ease:"back", scrollTrigger: '.img-who'})   
     gsap.from(".video-who", {opacity: 0, scale: 0, ease:"back", scrollTrigger: '.video-who', duration:0.8})   


    //  gsap.timeline()
     gsap.from(".mision-sec", {xPercent:-100, opacity:0, duration: 0.5, scrollTrigger: '.mision-sec'}) 
     gsap.from(".img-mision-vision", {yPercent: 100, opacity:0, duration: 0.5, scrollTrigger: ".img-mision-vision", ease: 'power3'})
     gsap.from(".vision-sec", {xPercent: -100, opacity:0, duration:0.25, scrollTrigger: ".vision-sec"})

     gsap.from(".vision-container", {opacity:0, scale:0, ease:"back", scrollTrigger: '.vision-container'});



        


}