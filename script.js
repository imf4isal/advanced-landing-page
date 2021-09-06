'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Select
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections); //Nodelist

const allButtons = document.getElementsByClassName('btn');

console.log(allButtons); //Html Collection

document.getElementsByTagName('button');

//An html collection is updated in real time  . But, Nodelist is depend on when we create the nodelist, then it will not be updated. It will be the same .

//create element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies to improve our user experience. <button class = "btn btn--close-cookie"> Got it ! </button>';

// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);
console.log(message);

//before after... what is the difference between before/prepend and after/append

// delete

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); // latest addition
    message.parentElement.removeChild(message); // old method
  });

//style.

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // can't console it. because it's an inline element
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 0 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));

// absolute value pyte hoile getAttribute use kora lagbe.

logo.setAttribute('company', 'Bankist'); // company naame a ekta attribut setted, jar value bankist

// data attribute // special

console.log(logo.dataset.versionNumber);

// logo
//.classList.add,remove,toggle,contains

//logo.className = 'faisal'// overwrite all classname, and add only one classname
