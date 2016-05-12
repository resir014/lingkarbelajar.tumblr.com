$('.photoset-grid').photosetGrid({
  highresLinks: true,
  rel: $('.photoset-grid').attr('data-id'),
  gutter: '5px',

  onComplete: function(){
    $('.photoset-grid-lightbox').attr('style', '');
    $('.photoset-grid-lightbox a').colorbox({
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'
    });
  }
});
