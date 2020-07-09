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
form.addEventListener('submit', addItem);

// clear items
clearBtn.addEventListener('click', clearItems);

// display items onload
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********

//add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if(value && !editFlag) {
    const element = document.createElement('article');
    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `;

    //add event listeners to edit and delete buttons
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert('item added to the list', 'success');
    // show container
    container.classList.add('show-container');
    // set local storage

    // set back to default
    setBackToDefault();
  }
  else if(value && editFlag) {
    // edit item
  }
  else {
    displayAlert('please enter value', 'danger');
  }
}

// display alert
displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if(items > 1) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  //localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {

}

// edit item

function editItem(e) {

}

// set back to defaults

setBackToDefault = () => {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}



// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

// display items onload
function setupItems() {
}
