jQuery(document).ready(function($){

  // faq
  $('.faq__title').click(function(event) {
    if($('.faq-block').hasClass('one')){
      $('.faq__title').not($(this)).removeClass('active');
      $('.faq__text').not($(this).next()).slideUp(150);
    }
    $(this).toggleClass('active').next().slideToggle(150);
  });


});
