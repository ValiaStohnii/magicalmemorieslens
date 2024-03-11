const navigation = document.querySelectorAll('.nav');
const page = document.querySelector('.page');

navigation.forEach(element => element.addEventListener('click', onBurgerBtnClick))

function onBurgerBtnClick(e) {
  if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger')) {
    return;
  }
console.log(this)
  this?.classList.remove('closed');
  page?.classList.add('open');

  if (this?.matches('.opened')) {
    this?.classList.add('closed');
    page?.classList.remove('open');

    setTimeout(() => {
      this?.classList.remove('opened');
    }, 100);
  }

  this?.classList.add('opened');
}
