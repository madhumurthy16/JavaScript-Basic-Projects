const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.onclick = () => {
  sidebar.classList.toggle('show-sidebar');
}

closeBtn.onclick = () => {
  sidebar.classList.remove('show-sidebar');
}
