document.getElementById('my-knopka').addEventListener("click", superptica);

function superptica() {
    const pic = document.createElement("img")        // создаю переменную = создаю картинку img
    pic.setAttribute("src", "./images/chicken.jpg")  // атрибуты для img
    pic.setAttribute("class", "pic_super_ptica")
    document.getElementById("container").replaceChildren(pic) //помещаю в div (с id container) переменную pic
}

document.getElementById("vremya").addEventListener("click", vremya)
function vremya() {
    const time = document.createElement("div")
    document.getElementById("time_container").replaceChildren(time)


    setInterval(time_update, 1000);

    function time_update() {
        time.innerHTML = new Date().toLocaleTimeString();
    }
}
