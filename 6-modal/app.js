const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalBtn.onclick = () => {
  modalOverlay.classList.add('open-modal');
}

closeBtn.onclick = () => {
  modalOverlay.classList.remove('open-modal');
}
