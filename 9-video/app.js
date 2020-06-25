const videoContainer = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');

switchBtn.onclick = () => {
  if(!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    videoContainer.pause();
  }
  else {
    switchBtn.classList.remove('slide');
    videoContainer.play();
  }
}
