// Membuat Element
const div = document.createElement('div');
console.log(div);
div.textContent = 'Hello gais saya baru nich';

// Menambahkan ke DOM
document.body.appendChild(div);

// Menghapus element
div.remove(); // -> Cara Baru
document.body.removeChild(div); // -> Cara Lama
