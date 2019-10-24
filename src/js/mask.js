$(document).ready(function(){
  var telephoneForm = document.querySelector('#telephone');
  $(telephoneForm).inputmask('+7-(999)-999-99-99');

  var telphonePopup = document.querySelector('#modal-telephone');
  $(telphonePopup).inputmask('+7-(999)-999-99-99');
});
