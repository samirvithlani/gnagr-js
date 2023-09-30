document.getElementsByClassName("box")[0].addEventListener("mouseover", () => {

    document.getElementsByClassName("image")[0].style = "height: 600px; width: 600px;"
})
document.getElementsByClassName("box")[0].addEventListener("mouseout", () => {

    document.getElementsByClassName("image")[0].style = "height: 400px; width: 400px;"
})
