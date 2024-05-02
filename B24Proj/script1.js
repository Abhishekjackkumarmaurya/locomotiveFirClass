var h1Elem=document.querySelector("page1 h1")
h1Elem.forEach(function(elem){
              var textContainer=elem.textContent
              var splitedText=textContainer.split("")
              var clutter=""
              splitedText.forEach(function(e){
                            clutter +=`<span>${e}</span>`
              })
           
              elem.innerHTML=clutter
})
// document.querySelectorAll("#page2").innerHTML = clutter;


gsap.to("#page1 h1 span",{
              // opacity:0,
              // x:"top 10%",
              color:"#E3EC4",
              stagger:1,
              scrollTrigger:{
                            trigger:"page2 h1 span",
                  scroller:"body",
                   markers:true,
                   start:"top 60%",
                   end:"top 20%",
                   scrub:1         
              }
})