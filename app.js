const emailBtn = document.querySelector('.email-notification');
const notifyMessage = document.querySelector('.exp');
const overLay = document.querySelector('.overlay');

function exitX() {
  notifyMessage.classList.add('hidden');
  overLay.classList.add('hidden');
}

function exit() {
  notifyMessage.classList.remove('hidden');
  overLay.classList.remove('hidden');
  setTimeout(exitX, 2200);
}

emailBtn.addEventListener('click', exit);
overLay.addEventListener('click', exitX);
