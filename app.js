
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

//modals for projects