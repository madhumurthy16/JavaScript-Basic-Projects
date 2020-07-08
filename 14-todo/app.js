// ****** SELECT ITEMS **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.onsubmit = () => {
  addItem();
}

// clear items
clearBtn.onclick = () => {
  clearItems();
}

// display items onload
window.DOMContentLoaded = () => {
  setupItems();
}

// ****** FUNCTIONS **********

//add item
addItem = () => {
  console.log("Hello");
}

// clear items
clearItems = () => {

}

// display items onload
setupItems = () => {
  
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
