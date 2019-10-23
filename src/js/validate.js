'use strict';

(function () {
  var Form = function (formElement, submitBtn) {
    this.element = formElement;
    this.submitBtn = submitBtn;
  }

  Form.prototype.validate = function () {
    var inputs = this.element.querySelectorAll('.form__input');

    inputs.forEach(function (input) {
      if (!input.value) {
        input.setCustomValidity('Необходимо заполнить данное поле');
        input.style.boxShadow = ' 0 0 2px 2px red';
      } else {
        input.setCustomValidity('');
        input.style.boxShadow = 'none';
      }
    });
  };

  Form.prototype.addHandlers = function () {
    this.submitBtn.addEventListener('click', this.validate.bind(this));

    this.element.addEventListener('submit', function (evt) {
      evt.preventDefault();
      window.success.popup.classList.add('popup--show');

      if (this.element.classList.contains('popup--show')) {
        this.element.classList.remove('popup--show')
      }
    }.bind(this));
  };

  var applicationFormElement = document.querySelector('.form-application');
  var applicationFormSubmitBtn = applicationFormElement.querySelector('.form-application__btn');
  var applicationForm = new Form (applicationFormElement, applicationFormSubmitBtn);
  applicationForm.addHandlers();

  var callbackFormElement = document.querySelector('.callback-modal');
  var callbackFormSubmitBtn = callbackFormElement.querySelector('.callback-form__btn');
  var callbackForm = new Form (callbackFormElement, callbackFormSubmitBtn);
  callbackForm.addHandlers();
})();
