//localStorage 

//setItem
// localStorage.setItem("name", "Mai Anh");
// localStorage.setItem("age", 18);
// localStorage.setItem("address", "Ha Nam");

//getItem
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));

//Change mode
let mode = localStorage.getItem("modeChange") || "";
const container = document.querySelector("html");
let btn = document.querySelector("#change");
//Hien thi sau khi mo lan dau
if (mode !== "") {
    container.classList.add(mode);
}

btn.addEventListener("click", () => {
    if (mode === "dark") {
        mode = "light";
    }
    else {
        mode = "dark";
    }
    container.setAttribute("class", mode);
    localStorage.setItem("modeChange", mode);
})




















//remove
// localStorage.removeItem("address");

//clear
//localStorage.clear();

//key
// console.log(localStorage.key(0))

//sessionStorage

// sessionStorage.setItem("name", "Mai Anh");
// sessionStorage.setItem("age", 18);
// sessionStorage.setItem("address", "Ha Nam");

//Closure
// const calc = (a, b) => {
//     const tinhTong = () => {
//         return a + b;
//     }
//     const tinhHieu = () => {
//         return a - b;
//     }
//     const tinhTich = () => {
//         return a * b;
//     }
//     const tinhThuong = () => {
//         return a / b;
//     }
//     return {
//         tong: tinhTong(),
//         hieu: tinhHieu(),
//         tich: tinhTich(),
//         thuong: tinhThuong()
//     }
// }
// console.log(calc(10, 20).tong);

//Default parameters
// const sum = (a = 0, b = 0) => {
//     return a + b;
// }
// console.log(sum());
// console.log(sum(4));

// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// console.log(sum());

//Spread syntax
// let arr1 = [1, 2, 3, 5];
// let arr2 = [10, 11, 12];
// arr1 = [...arr2, ...arr1];
// console.log(arr1);

// var inforUserDB = {
//     name: "Mai Anh",
//     age: 18
// };
// var inforUserFE = {
//     address: "Ha Nam",
//     phone: "01223344"
// }

// inforUserDB = {
//     ...inforUserDB,
//     ...inforUserFE
// }
// console.log(inforUserDB);

//Rest
// const print = (num1, num2, ...rest) => {
//     console.log(num1);
//     console.log(num2);
//     console.log(rest);
// }
// print(1, 2, 3, 4, 5, 6, 7, 8, 9, 20);

//Destructuring
// const time = [15, 25, 43];
// const [hour, minute, seconds] = time;
// console.log(hour);

// const inforUser = {
//     name: "Mai Anh",
//     age: 18,
//     address: "Ha Nam",
//     phone: "0123445667"
// }

// const { name, address, age, phone } = inforUser;
// console.log(address);

//Bai tap
//Bai 1
/*
var fruits = ['apple', 'banana', 'orange'];
//Luu mang fruits vao localStorage
localStorage.setItem("arrayFruits", JSON.stringify(fruits));
//Lay mang fruits chuyen doi tu Json sang js
const fruitsJSON = localStorage.getItem("arrayFruits");
const fruitsJS = JSON.parse(fruitsJSON);
console.log(fruitsJS);
*/

//Bai 2
/*
const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");
const menu = document.querySelector(".menu");

var dataList = JSON.parse(localStorage.getItem("dataList")) || []; //Tra ve 1 mang cac phan tu

function display() {
    menu.innerHTML = "";
    for (let i = 0; i < dataList.length; i++) {
        const li = document.createElement("li");
        li.textContent = dataList[i];
        li.setAttribute("index", i); //Them thuoc tinh index de luu vi tri de xoa
        const buttonDel = document.createElement("button");
        buttonDel.textContent = "Delete";
        buttonDel.addEventListener("click", function () {
            const index = parseInt(this.parentElement.getAttribute("index"));
            console.log(index);
            deleteElement(index);
            display();
        })
        li.appendChild(buttonDel);
        menu.appendChild(li);
    }
}

function deleteElement(index) {
    dataList.splice(index, 1); //Tro den index, xoa 1 phan tu
    localStorage.setItem("dataList", JSON.stringify(dataList));
}

function addElement() {
    const dataInput = input.value;
    if (dataInput != "") {
        dataList.push(dataInput);
        localStorage.setItem("dataList", JSON.stringify(dataList));
        input.value = "";
    }
}

display();

btnAdd.addEventListener("click", () => {
    addElement();
    display();
})
*/

