
document.getElementById("knopka1").addEventListener("click", protect);

const correct = ["Да", "да", "Yes", "yes"]
const incorrect = ["Пизда", "пизда"]
function protect() {
    let check = prompt("Вы любите птиц? (да/нет)")
    if (correct.includes(check)) {
        //if (check === "да" || check === "Да") {
        alert("Вы прошли!");

        const ssulka12 = document.createElement("a") //ssulka2 равно создать тег А (ссылка)
        ssulka12.setAttribute("href", "2index.html") //задаю тэгу-ссылке атрибуты
        ssulka12.click()                              // кликаю на ссылку

        // window.location.replace('2index.html');
    }

    else if (incorrect.includes(check)) {
        alert("манда")
        alert("Вы не прошли!!!")
        document.body.style.backgroundColor = 'red';

        const pidor = document.createElement("p")
        pidor.innerHTML = "Ты МуДаК !!!"
        pidor.setAttribute("class", "pidor")
        document.getElementById("pidor").appendChild(pidor) // можно replaceChildren (Ты мудАк будет только один)

    }
    else if (true) {
        alert("cам ты " + check)
        alert("Вы не прошли!!!")
        document.body.style.backgroundColor = 'red';

        const pidor = document.createElement("p")
        pidor.innerHTML = "Ты МуДаК !!!"
        pidor.setAttribute("class", "pidor")
        document.getElementById("pidor").appendChild(pidor)
    }


    // else {
    //     // let message = "Вы не прошли"
    //     // if (incorrect.includes(check)) {
    //     //     message = "Сам ты " + check + "!!!"
    //     // }
    //     // document.body.style.backgroundColor = 'red';
    //     // alert(message)
    //     const pidor = document.createElement("p")
    //     pidor.innerHTML = "Ты МуДаК !!!"
    //     pidor.setAttribute("class", "pidor")
    //     document.getElementById("pidor").appendChild(pidor)
    // }
}