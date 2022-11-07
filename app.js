
const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")

//function for buttons to determine current page/section
function onClickHandle(event) {
    const pageId = event.target.innerText.toLowerCase().replaceAll(' ', '-')

    for (let i = 0; i < pages.length; i++) {
        if (pageId === pages[i].id) {
            pages[i].className = "current-page"
        } else {
            pages[i].className = "hidden-page"
        }
    }
    document.getElementById("hamburger").checked = false;
}

//event listener to change page based on button click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClickHandle)
}

//small function to make sure home section displays on page load, with menu closed
function homePage() {
    document.getElementById("home").className = "current-page"
    document.getElementById("hamburger").checked = false;
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
}

window.onload = homePage()

//submit button for contact form

    document.getElementById("submit").addEventListener("click", submitForm)

    function submitForm() {
        if (confirm("Do you want to submit this message?")) {
            alert("Message Sent! Thank you for your response!")
            document.getElementById("message").value = "";
            document.getElementById("email").value = "";
        }
    }

//modals for projects (time crunch, not the most proud of its un-DRY-ness)
const big1 = document.getElementById("modal1")
const big2 = document.getElementById("modal2")
const big3 = document.getElementById("modal3")
const big4 = document.getElementById("modal4")
const closeX1 = document.querySelectorAll("#x1")[0];
const closeX2 = document.querySelectorAll("#x2")[0];
const closeX3 = document.querySelectorAll("#x3")[0];
const closeX4 = document.querySelectorAll("#x4")[0];

// closeX1.onclick = function() {
//     big1.style.display = "none"
// }
closeX1.addEventListener("click", closedX1);
function closedX1() {
    big1.style.display = "none"
}
closeX2.addEventListener("click", closedX2);
function closedX2() {
    big2.style.display = "none"
}
closeX3.addEventListener("click", closedX3);
function closedX3() {
    big3.style.display = "none"
}
closeX4.addEventListener("click", closedX4);
function closedX4() {
    big4.style.display = "none"
}

document.getElementById("one").addEventListener("click", clickedOne);
function clickedOne() { 
    big1.style.display = "block"
}

document.getElementById("two").addEventListener("click", clickedTwo);
function clickedTwo() { 
    big2.style.display = "block"
}

document.getElementById("three").addEventListener("click", clickedThree);
function clickedThree() { 
    big3.style.display = "block"
}

document.getElementById("four").addEventListener("click", clickedFour);
function clickedFour() { 
    big4.style.display = "block"
}
