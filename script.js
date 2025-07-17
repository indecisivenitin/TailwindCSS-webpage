// const clickFunction = document.getElementById("menu")
// const id = document.getElementById("logo")
// function clickfunction(){
//   id.style.display="none"
// }

const hiddenNav = document.getElementById("hidden-nav")
function hiddenMenu(){
    hiddenNav.classList.toggle("hidden");
}

const initialtranslateLTR = -48*4;
const initialtranslateRTL = 36*4;
function setupIntersection(element, isLTR, speed){
    const intersectioncallback=(enteries)=>{
        const isIntersecting = enteries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener("scroll",scrollHandler);
        }
        else{
            document.removeEventListener("scroll",scrollHandler)
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectioncallback)
    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX= (window.innerHeight-element.getBoundingClientRect().top)*speed;
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate= translateX+ initialtranslateLTR;
        }
        else{
            totalTranslate= -(translateX+ initialtranslateRTL);
        }
        element.style.transform= `translateX(${totalTranslate}px)`
    }
}
   
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const line4 = document.getElementById("line-4")
setupIntersection(line1, true, 0.15);
setupIntersection(line2, false, 0.15);
setupIntersection(line3, true, 0.15);
setupIntersection(line4, true, 0.8);

const dtElements = document.querySelectorAll("dt")
dtElements.forEach(element=>{
    element.addEventListener("click",()=>{
        const ddId = element.getAttribute("aria-controls");
        const ddElement = document.getElementById(ddId)
        const ddArrowIcon = element.querySelectorAll("i")[0];
        ddElement.classList.toggle("hidden");
        ddArrowIcon.classList.toggle("-rotate-180")
    })
})
