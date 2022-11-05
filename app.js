
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
}

//event listener to change page based on button click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClickHandle)
}

//small function to make sure home section displays on page load, with menu closed
function homePage() {
    document.getElementById("home").className = "current-page"
    document.getElementById("hamburger").checked = false;
}

window.onload = homePage()