var callbackModalWindow = document.querySelector('.callback-modal');
var openBtn = document.querySelector('.features-list__link--callback');
var closeBtn = document.querySelector('.callback-modal__close-btn');

var openWidnowBtnHandler = function () {
  callbackModalWindow.classList.toggle('callback-modal--show');
};

var closeWindowBtnHandler = function () {
  if (callbackModalWindow.classList.contains('callback-modal--show')) {
    callbackModalWindow.classList.remove('callback-modal--show');
  }
};

openBtn.addEventListener('click', openWidnowBtnHandler);
closeBtn.addEventListener('click', closeWindowBtnHandler);
