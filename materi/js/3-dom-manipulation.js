const teks2 = document.getElementById('teks');
teks2.setAttribute('class', 'test');
console.log(teks2.getAttribute('class'));
teks2.removeAttribute('class');

teks2.id = 'apa';

teks2.style.color = 'green';

teks2.classList.add('active');
teks2.classList.remove('active');
teks2.classList.toggle('active', false);
console.log(teks2);
