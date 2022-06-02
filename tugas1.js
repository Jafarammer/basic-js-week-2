//1.Method filter
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const value = number.filter((param) => param % 2 == 0); //arrow function
const value1 = number.filter(function (param1) {
  //anonymus function / function tanpa nama
  return param1 % 2 == 1;
});
console.log(`Method filter : ${value}`); //output genap : 2,4,6,8,10,12,14
console.log(`Method filter : ${value1}`); //output ganjil : 1,3,5,7,9,11,13,15

//2.Method length
let kalimat = "Palindrom";
let cekLength = kalimat.length; //mencaritahu panjang karakter dari kalimat menggunakan method length
console.log(`Method length : ${cekLength}`);

//3.Method parseInt
const nim = parseInt("1455201345"); //mengkonversi string ke integer
const cekType = typeof nim;
console.log(`Method parseInt : ${cekType}`);

// 4.Method replace
const p = "Good morning nanang";
console.log(p.replace("nanang", "jafar")); //mengganti kalimat nanang menjadi jafar
// Method replace mengembalikan string baru dengan beberapa atau semua kecocokan pola yang diganti dengan pengganti.

// 5.Method push
const fruit = ["Apple", "Orange", "Mango", "Grape"];
console.log(fruit);
const addFruit = fruit.push("water melon"); //menambah isi array
console.log(fruit);

// 6.Method sort
const months = [
  "Wan Jafar",
  "Ikhsan",
  "Aldo",
  "Kevin",
  "Nanang",
  "Verdy",
  "Reza",
  "Bilkis Ismail",
];
console.log(`Before ${months}`);
months.sort(); //Mengurutkan secara ascending
console.log(`After ${months}`);

//7. Method math.random
function acak(idPegawai) {
  return Math.random(idPegawai) * 2;
}
console.log(acak(45)); //output akan menghasilkan nilai acak setiap di cetak

//8.Method concat
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); //menggabungkan data array

console.log(array3);
// output: ["a", "b", "c", "d", "e", "f"]

//9.Method slice
const animals = ["ant", "bison", "camel", "duck", "elephant", "Monkey", "Cat"];
console.log(animals.slice(2, 4)); //mencetak nilai array dari index ke 2 sd ke 4
//output: ["camel", "duck", "elephant"]

//10.Method findIndex
const listNumber = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13; //mencari nilai yang lebih besar dari 13

console.log(listNumber.findIndex(isLargeNumber));
//output: 3
