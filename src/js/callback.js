'use strict';

(function () {
  var callbackModalWindow = document.querySelector('.callback-modal');
  var openBtn = document.querySelector('.features-list__link--callback');
  var closeBtn = document.querySelector('.callback-modal__close-btn');

  var openWidnowBtnHandler = function () {
    callbackModalWindow.classList.toggle('popup--show');
  };

  var closeWindowBtnHandler = function () {
    if (callbackModalWindow.classList.contains('popup--show')) {
      callbackModalWindow.classList.remove('popup--show');
    }
  };

  openBtn.addEventListener('click', openWidnowBtnHandler);
  closeBtn.addEventListener('click', closeWindowBtnHandler);
})();
