// DOM manipulation

// CARA 1
// membuat element/tag baru
const pBaru = document.createElement('p');

// membuat text/content untuk tag/node baru
const textPBaru = document.createTextNode('Paragrag baru');

//  simpan tulisan/node kedalam paragraf/element
pBaru.appendChild(textPBaru);

// simpan tag kedalam halaman dengan appendchild
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




// CARA 2   

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// Menghapus dan menreplace child

// remove link ig, yg diperlukan: parent dan element yg diremove

const link = document.querySelector('a');
sectionA.removeChild(link);


// membuat paragraph baru

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];

const judulSecB = document.createElement('h2');
const textJudul = document.createTextNode('Gw adalah judul');
judulSecB.appendChild(textJudul);
sectionB.replaceChild(judulSecB,p4);