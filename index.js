// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let alas = prompt("Masukkan Alas:");
let tinggi = prompt("Masukkan Tinggi:");
let luas = 0.5 * alas * tinggi;

console.log(`luas Segitiga = ${luas} cm square`);
appDiv.innerHTML = `<h1><u>Menghitung Luas Segitiga</u></h1>
<br>
Luas Segitiga = 0.5 x ${alas}cm x ${tinggi}cm = ${luas} cm<sup>2</sup>`;
