$(document).ready(function(){
  $('.bxslider').bxSlider({
    pagerCustom: '.thumb'
  });


  $('.demo').videoBox({
    width: '520',
    height: '330',
    loop: false,
    autoplay: false,
    byline: true,
    color: "00adef",
    maxheight: '',
    maxwidth: '',
    portrait: true,
    title: '',
    border: false,
  });
});
