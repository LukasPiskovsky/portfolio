let languages = document.getElementById("languages")
let languages2 = document.getElementById("languages2")

let header = document.querySelector("header")
let section = document.querySelectorAll("section")
let sectionHeading = document.querySelectorAll(".section-heading")
let portrait = document.querySelector(".portrait")
let firstA = document.querySelector(".first-a")
let secondA = document.querySelector(".second-a")
let bar = document.querySelector(".bar")
let article = document.querySelectorAll("article")
let body = document.querySelector("body")
let kingsmanIcons = document.querySelectorAll(".kingsman-icon")
let kingsman = document.querySelector(".kingsman")
let weatherse = document.querySelector(".weatherse")
let weatherseIcons = document.querySelectorAll(".weatherse-icon")
let ivelek = document.querySelector(".ivelek")
let ivelekIcons = document.querySelectorAll(".ivelek-icon")

//bar
window.addEventListener("scroll", () =>{
    let documentHeight = body.offsetHeight - window.innerHeight
    let currentHeight = window.scrollY
    let result = Math.round(((documentHeight + currentHeight) / documentHeight * 100) -100)
    bar.style.width = result + "%"
    if(result == 100){
        bar.style.borderRadius = "0px"
    } else{
        bar.style.borderRadius = "0 5px 5px 0"
    }
})

//icon animation function

function animateIcons(container, icons){
    container.addEventListener("mouseover", ()=>{
        if(!icons[icons.length -1].classList.contains("animate-icon")){
            icons.forEach((elem, index)=>{
                setTimeout(()=>{
                    elem.classList.add("animate-icon")
                }, 400 * index)
            })
        }
    }) 
    
    container.addEventListener("mouseout", ()=>{
        if(icons[icons.length -1].classList.contains("animate-icon")){
            icons.forEach((elem, index)=>{
                setTimeout(()=>{
                    elem.classList.remove("animate-icon")
                }, 400 * index)
            })
        }
    })
}
//Kingsman Icons
animateIcons(kingsman, kingsmanIcons)
//Weatherse Icons
animateIcons(weatherse, weatherseIcons)
//gewo Icons
animateIcons(ivelek, ivelekIcons)

//Navbar

window.addEventListener("scroll", () =>{

    if(window.scrollY > header.offsetHeight -100){
        header.children[2].children[0].style.position = "fixed"
        header.children[2].children[0].style.top = "5px"
        portrait.style.position = "fixed"
        portrait.style.left = "50%"
        portrait.style.right = "50%"
        portrait.style.transform = "translateX(-50%)"
        portrait.style.top = "0%"
        portrait.style.width = "5vw"
        portrait.style.minWidth = "50px"
        portrait.style.backgroundColor = "#333"
    } else{
        header.children[2].children[0].style.position = "static"
        header.children[2].children[0].style.top = "unset"
        portrait.style.position = "absolute"
        portrait.style.left = "unset"
        portrait.style.right = "15%"
        portrait.style.transform = "unset"
        portrait.style.top = "3vw"
        portrait.style.width = "16vw"
        portrait.style.backgroundColor = "var(--heading-color)"
    }

    if(window.scrollY > header.offsetHeight + section[0].offsetHeight + 100 && window.scrollY < header.offsetHeight + section[0].offsetHeight + section[1].offsetHeight + 100){
        firstA.style.backgroundColor = "#111"
        firstA.style.color = "var(--highlight-color)"
        sectionHeading[1].style.visibility = "hidden"
        

    } else {
        firstA.style.backgroundColor = "unset"
        firstA.style.color = "var(--heading-color)"
        sectionHeading[1].style.visibility = "visible"
    }

    if(window.scrollY > header.offsetHeight + section[0].offsetHeight + section[1].offsetHeight + 125 && window.scrollY < header.offsetHeight + section[0].offsetHeight + section[1].offsetHeight + section[2].offsetHeight + 125){
        secondA.style.backgroundColor = "#111"
        secondA.style.color = "var(--highlight-color)"
        sectionHeading[2].style.visibility = "hidden"
    } else {
        secondA.style.backgroundColor = "unset"
        secondA.style.color = "var(--heading-color)"
        sectionHeading[2].style.visibility = "visible"
    }
})


//Text animation

let languagesText = "HTML, CSS, Javascript"
let languages2Text = "PHP, jQuery, MySQL"

let languagesTextArray = languagesText.split("")
let languages2TextArray = languages2Text.split("")

setTimeout(()=>{
    languagesTextArray.forEach((char, index) =>{
        let span = document.createElement("span")
        span.textContent = char
        span.style.opacity = "0"
        span.style.transition = "opacity 0.3s"
    
        setTimeout(()=>{
            span.style.opacity = "1"
            languages.appendChild(span)
        }, index * 60)
    })
}, 1000)

setTimeout(()=>{
    languages2TextArray.forEach((char, index) =>{
        let span = document.createElement("span")
        span.textContent = char
        span.style.opacity = "0"
        span.style.transition = "opacity 0.3s"
    
        setTimeout(()=>{
            span.style.opacity = "1"
            languages2.appendChild(span)
        }, index * 60)
    })
}, 2000)

/**Projects**/

// let projects = [
//     {
//         heading:"KINGSMAN",
//         about:"Ilustrační stránka pro barbershop",
//         url:"lukaspiskovsky.github.io/kingsman/",
//         pcImage:["img/barberPC1.png", "img/barberPC2.png", "img/barberPC3.png"],
//         tabletImage:["img/barberTablet1.png", "img/barberTablet2.png", "img/barberTablet3.png"],
//         phoneImage:"",
//         features: [
//             {
//                 icon:"",
//                 featureName:""
//             }
//         ]
//     },
//     {
//         heading:"",
//         about:"",
//         url:"",
//         pcImage:"",
//         tabletImage:"",
//         phoneImage:"",
//         features: [
//             {
//                 icon:"",
//                 featureName:""
//             }
//         ]
//     },
//     {
//         heading:"",
//         about:"",
//         url:"",
//         pcImage:"",
//         tabletImage:"",
//         phoneImage:"",
//         features: [
//             {
//                 icon:"",
//                 featureName:""
//             }
//         ]
//     }
// ]

// let screenImg = [
//     {
//         pc:""
//     },
//     {
//         tablet:""
//     },
//     {
//         phone:""
//     }
// ]