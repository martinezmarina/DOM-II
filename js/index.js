// Your code goes here
function get(selector){
    return document.querySelector(selector)
}
////// Mouseover ////////
const homeNav = get(".nav-link:nth-of-type(1)")
const aboutNav = get(".nav-link:nth-of-type(2)")
const blogNav = get(".nav-link:nth-of-type(3)")
const contactNav = get(".nav-link:nth-of-type(4)")


homeNav.addEventListener("mouseover", function(event){
    homeNav.style.color = "crimson";
    homeNav.style.fontWeight = 900;
    setTimeout(function(){
        homeNav.style.color = "";
        homeNav.style.fontWeight = null;
    }, 500);
}, false);

aboutNav.addEventListener("mouseover", function(event){
    aboutNav.style.color = "darkorange";
    aboutNav.style.fontWeight = 900;
    setTimeout(function(){
        aboutNav.style.color = "";
        aboutNav.style.fontWeight = null;
    }, 500);
}, false);

blogNav.addEventListener("mouseover", function(event){
    blogNav.style.color = "gold";
    blogNav.style.fontWeight = 900;
    setTimeout(function(){
        blogNav.style.color = "";
        blogNav.style.fontWeight = null;
    }, 1000);
}, false);

contactNav.addEventListener("mouseover", function(event){
    contactNav.style.color = "forestgreen";
    contactNav.style.fontWeight = 900;
    setTimeout(function(){
        contactNav.style.color = "";
        contactNav.style.fontWeight = null;
    }, 1000)
}, false);
////// end of mouseover///////

///////////// keydown //////////////////
const logo = get(".logo-heading")

document.addEventListener("keydown", function(event){
    if(event.key === "r"){
       logo.style.color = "red"; 
    } else if(event.key === "o"){
        logo.style.color = "orange";
    } else if (event.key === "y"){
        logo.style.color = "yellow";
    } else if (event.key === "g"){
        logo.style.color = "green";
    } else if (event.key === "b"){
        logo.style.color = "blue";
    } else if (event.key === "i"){
        logo.style.color = "indigo";
    } else if (event.key === "v"){
        logo.style.color = "violet";
    } else {
        logo.style.color = "";
    }
})
///////// end of keydown ////////////

///////////////// wheel ///////////////
const busImage = get(".intro img");
let scale = 1;

function zoom(event){
    event.preventDefault();
    if(event.deltaY < 0){
        scale *= event.deltaY * -0.01;
    }
    else {
        scale /= event.deltaY * 0.01;
    }
    scale = Math.min(Math.max(.125, scale), 4);
    busImage.style.transform = `scale(${scale})`;
}

busImage.addEventListener("wheel", zoom);
//////// end of wheel ///////////////////

/////////// drag / drop ///////////////
const firstImage = get(".content-section .img-content img");
const secondImage = get(".inverse-content .img-content img");

const firstDropArea = get(".inverse-content .img-content");
const secondDropArea = get(".content-section .img-content");


document.addEventListener("dragstart", function(event){
    firstImage.style.opacity = .5;
    secondImage.style.opacity = .5;
})
document.addEventListener("dragend", function(event){
    firstImage.style.opacity = "";
    secondImage.style.opacity = "";
})
document.addEventListener("dragover", function(event){
    event.preventDefault();
})
document.addEventListener("drop", function(event){
    if(event.target === secondImage){
        firstImage.parentNode.removeChild(firstImage); 
        firstDropArea.appendChild(firstImage);  
    } else if(event.target === firstImage){
    secondImage.parentNode.removeChild(secondImage);
    secondDropArea.appendChild(secondImage)
    }
})

// ??????????????????????????????????//

///////////// Load /////////////////
window.addEventListener("load", function(event){
  console.log("Page is Fully Loaded");
});
///////// load End ////////////////

///////// focus ///////////////////
const boatInput = get(".content-destination input")
boatInput.addEventListener("focus", function(event){
    boatInput.style.background = "aqua"
})
////////// focus End /////////////

//////////// resize /////////////////
window.addEventListener("resize", function(event){
    window.alert("DON'T TOUCH MY WINDOW!!!!")
})
////////// resize End ///////////////

///////////// scroll ///////////////////
window.addEventListener("scroll", function(event){
    console.log(window.scrollY);
})
/////////// scroll end ////////////////

//////////// select //////////////////


boatInput.addEventListener("select", function(event){
    boatInput.style.fontWeight = 1000;
})
///////// select end ////////////////

///////////// dblclick ////////////
const boatPicture = get("#boatPic");
boatPicture.addEventListener("dblclick", function(event){
    boatPicture.style.borderRadius = "300px"
})
///////// dblclick end /////////////

