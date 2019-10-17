var applicationForm = document.querySelector('.form-application');
var applicationFormSubmitBtn = applicationForm.querySelector('.form-application__btn');

var validateApplicationForm = function () {
  var inputs = applicationForm.querySelectorAll('.form__input');

  inputs.forEach(function (input) {
    if (!input.value) {
      input.setCustomValidity('Необходимо заполнить данное поле');
      input.style.border = '1px solid red';
    } else {
      input.setCustomValidity('');
      input.style.border = 'none';
    }
  });
};

applicationFormSubmitBtn.addEventListener('click', function () {
  validateApplicationForm();
});

applicationForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  alert('olololo!');
})
