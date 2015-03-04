var $form = $('.form');
var $name = $('.main-input');
var $list = $('.list');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>').html($name.val());
    var $nameDl = $('<button class="delete">X</button>');

