$(document).ready(function() {

$('.ui.sidebar').sidebar({
    context: $('.bottom.segment'),
    transition: 'overlay'
  }).sidebar('attach events', ' .menu .item');



$('.special.cards .image').dimmer({
  on: 'hover'
});

});
