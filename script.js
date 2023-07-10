const body = document.getElementById("bg")


const hello = document.querySelector(".hello")
const hello1 = document.querySelector(".hello_1")


function colorChange()
{
    bg.style.background = `linear-gradient(45deg , ${hello.value},${hello1.value})`;
    // bg.style.background = `linear-gradient(to right , ${hello.value},${hello1.value})`;

}

hello.addEventListener("input" , colorChange)
hello1.addEventListener("input" , colorChange)