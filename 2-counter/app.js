const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

let count = 0;

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);

    if(styles.contains('decrease')) {
      count--;
    }

    else if(styles.contains('increase')) {
      count++;
    }
    else {
        count = 0;
      }

     count > 0 ? value.style.color = 'green'
   : count < 0 ?  value.style.color = 'red'
   : value.style.color = '#222';

   value.textContent = count;

  });
});
