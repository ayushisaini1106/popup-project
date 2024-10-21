function openPopup()
{
    const overlay=document.querySelector("overlay")
    overlay.style.display="black";
    const popup=document.querySelector(".myPop");
    popup.classList.add("show")
}


window.addEventListener("load",()=>{
    setTimeout(openPopup, 5000);
})