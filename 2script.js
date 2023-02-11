document.getElementById('my-knopka').addEventListener("click", superptica);

function superptica() {
    const pic = document.createElement("img")        // создаю переменную = создаю картинку img
    pic.setAttribute("src", "./images/chicken.jpg")  // атрибуты для img
    pic.setAttribute("class", "pic_super_ptica")
    document.getElementById("container").replaceChildren(pic) //помещаю в div (с id container) переменную pic
}
