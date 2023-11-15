console.log("^^^^^^^^^^ EX-1 ^^^^^^^^^^");

function ex1() {
    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    console.log(arr.length);

    let list = document.querySelectorAll("li");

    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }

    console.log("=========================");

    for (let item of list) {
        console.log(item);
    }
}

ex1();
function exChangeElement() {
    let list = document.querySelectorAll("li");

    for (let item of list) {
        let num = item.innerText;
        item.innerText = Number(num) * 10;
        console.log(item);
    }
}

h1.style.color = "green";

//document.write("kjh kjhkju ljkhkjh")



