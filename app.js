// Define Vars
const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")


function onClickHandle(event) {
    console.log(event)
    const pageId = event.target.innerText.toLowerCase().replaceAll(' ', '-')

    // loop over all the pages
    for (let i = 0; i < pages.length; i++) {
        if (pageId === pages[i].id) {
            pages[i].className = "current-page"
        } else {
            pages[i].className = "hidden-page"
        }
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClickHandle)
}
