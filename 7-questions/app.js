//Method 1 - using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  btn.onclick = (e) => {
    const items = document.querySelectorAll('.question');
    items.forEach(item => {
      if(item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  }
});

// Method 2 - traversing the dom

//const btns = document.querySelectorAll('.question-btn');

//  btn.onclick = (e) => {
    //const question = e.currentTarget.parentElement.parentElement;
    //question.classList.toggle('show-text');
  //}
 //});
