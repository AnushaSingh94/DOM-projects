let container = document.getElementById("container");
let display = document.getElementById("display");

// now adding a key down listner to the element 
document.addEventListener("keydown", function (e){
    display.style.color = "blue";
    display.innerText = e.key + "is keyDown";
});

// now adding a key up listner to the element 
document.addEventListener("keyup", function (e){
    display.style.color = "green";
    display.innerText = e.key + "is keyUp";
});
