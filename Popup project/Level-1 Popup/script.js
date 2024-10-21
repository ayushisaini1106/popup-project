let res;
function popUp()
{
    // alert("Do you want to share your location?")
    res=confirm("Accept all cookies..!")
    console.log(res)
}

// Loading html
window.addEventListener("load",()=>{
    // setTimeout(popUp, 2000);
    popUp()
})

if(!res)
{
    setTimeout(popUp, 2000);
}