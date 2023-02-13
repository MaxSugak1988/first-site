
document.getElementById("knopka1").addEventListener("click", protect);

function protect() {
    let check = prompt("Вы любите птиц?(да/нет)")
    if (check === "да" || check === "Да") {
        alert("Вы прошли!");

        const ssulka12 = document.createElement("a") //ssulka2 равно создать тег А (ссылка)
        ssulka12.setAttribute("href", "2index.html") //задаю тэгу-ссылке атрибуты
        ssulka12.click()                              // кликаю на ссылку

        // window.location.replace('2index.html');
    }

    else {
        document.body.style.backgroundColor = 'red';
        alert("Вы не прошли!!!")

        const pidor = document.createElement("p")
        pidor.innerHTML = "Ты МуДаК !!!"
        pidor.setAttribute("class", "pidor")
        document.getElementById("pidor").appendChild(pidor)
    }
}