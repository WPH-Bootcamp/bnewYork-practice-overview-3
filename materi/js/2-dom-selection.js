// DOM Selection -> Cara mengambil HTML menjadi Object Model Javascript
/**
 * 1. getElementById() -> fungsi untuk memilih elemen berdasarkan atribut id.
 * 2. getElementsByClassName() -> fungsi untuk memilih elemen berdasarkan atribut class.
 * 3. getElementsByTagName() -> fungsi untuk memilih elemen berdasarkan nama tag.
 * 4. querySelector() -> fungsi untuk memilih elemen berdasarkan query.
 * 5. querySelectorAll() -> fungsi untuk memilih elemen berdasarkan query.
 */

// 1. getElementById() -> paling sering digunakan
const teks = document.getElementById('teks');
console.log(teks);
teks.style.color = 'blue';
teks.style.fontSize = '100px';
teks.innerText = 'Ucupppppppppp WOYYY';

// 2. getElementsByClassName()
const parentDom = document.getElementById('parent-id');

const test = parentDom.getElementsByClassName('test');
console.log(test);

const test1 = parentDom.getElementsByClassName('test')[0];
console.log(test1);

// 3. getElementsByTagName()
const p = document.getElementsByTagName('p');
console.log(p);
console.log(`Ada sekitar ${p.length} tag p disini`);

// 4. querySelector()
// const paragraph = document.querySelector('.demo');
// console.log(paragraph);

// paragraph.innerText = 'Test';
// paragraph.style.color = 'red';

// 5. querySelectorAll()
const myItems = document.querySelectorAll('.demo');
console.log(myItems);
myItems[0].innerText = 'Hello cantikkk....';
myItems[1].innerText = 'Hahahha';
myItems[0].innerHTML = '<h1>Hellooo</h1>';

for (let i = 0; i < myItems.length; i++) {
  console.log(myItems[i]);
}

myItems.forEach((data) => {
  console.log(data);
});
