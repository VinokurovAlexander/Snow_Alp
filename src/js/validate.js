'use strict';

(function () {
  var Form = function (formElement, submitBtn, wrapperElement = '') {
    this.element = formElement;
    this.submitBtn = submitBtn;
    this.wrapper = wrapperElement;
  }

  Form.prototype.validate = function () {
    var inputs = this.element.querySelectorAll('.form__input');


    inputs.forEach(function (input) {
      if (!input.value) {
        input.setCustomValidity('Необходимо заполнить данное поле');
        input.style.boxShadow = ' 0 0 2px 2px red';
      } else if (input.getAttribute('type') === 'tel' && input.value.replace(/\D+/g, '').length < 11) {
        input.setCustomValidity('Данное поле необходимо заполнить полностью');
        input.style.boxShadow = ' 0 0 2px 2px red';
      } else {
        input.setCustomValidity('');
        input.style.boxShadow = 'none';
      }
    });

    var checkbox = this.element.querySelector('.form__checkbox');
    var label = this.element.querySelector('.form__checkbox + label')
    if (!checkbox.checked) {
      checkbox.setCustomValidity('Необходимо ваше согласие');
      label.style.color = 'red';
    } else {
      checkbox.setCustomValidity('');
      label.style.color = '#ffffff';
    }
  };

  Form.prototype.addHandlers = function () {
    this.submitBtn.addEventListener('click', this.validate.bind(this));

    this.element.addEventListener('submit', function (evt) {
      evt.preventDefault();
      this.element.reset();

      if (this.wrapper && this.wrapper.style.display === 'flex') {
        this.wrapper.nextElementSibling.click();
      }
      var successPopupOpenBtn = document.querySelector('.popup__open-btn--success');
      successPopupOpenBtn.click();
    }.bind(this));

  };

  var applicationFormElement = document.querySelector('.form-application');
  var applicationFormSubmitBtn = applicationFormElement.querySelector('.form-application__btn');
  var applicationForm = new Form (applicationFormElement, applicationFormSubmitBtn);
  applicationForm.addHandlers();

  var callbackFormElement = document.querySelector('.callback-form');
  var callbackFormSubmitBtn = callbackFormElement.querySelector('.callback-form__btn');
  var callbackFormWrapper = document.querySelector('.callback-modal')
  var callbackForm = new Form (callbackFormElement, callbackFormSubmitBtn, callbackFormWrapper);
  callbackForm.addHandlers();
})();
