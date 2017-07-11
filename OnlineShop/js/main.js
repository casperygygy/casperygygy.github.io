;
$(document).ready(function(){
  $('.bxslider').bxSlider({
    pagerCustom: '.bxslider__pager',
    controls: false
  });

  $('.product-item_slider').bxSlider({
    pagerCustom: '.product-item_colors',
    controls: false
  });

  $('.product-view_slider').bxSlider({
    pagerCustom: '.product-view_pager',
    controls: false
  });

  $('.sizes-list li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $('.choose-size_list li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
});
