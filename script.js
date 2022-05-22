$(function(){
  
  $('.accordion').click(function(){
    var $detail = $(this).find('.detail');
    if($detail.hasClass('open')){
      $detail.removeClass('open');
      $detail.slideUp();
      $(this).find('span').text('+');

    } else {
      $detail.addClass('open');
      $detail.slideDown();
      $(this).find('span').text('-');
    }
  });

});
