var telephoneForm = document.querySelector('#telephone');
var telephoneCallback = document.querySelector('#modal-telephone');
var im = new Inputmask("+7-(999)-999-99-99");
im.mask(telephoneForm);
im.mask(telephoneCallback);
