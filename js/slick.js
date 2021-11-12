// product slick
$('.site-product__list').slick({
  centerMode: true,
  centerPadding: '0',
  dots: false,
  arrows: true,
  slidesToShow: 4,
  prevArrow:'<button class="site-product__nav-btn-left"><i class="fal fa-long-arrow-left"></i></button>',
  nextArrow:'<button class="site-product__nav-btn-right"><i class="fal fa-long-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

// partners slick

$('.site-partners__list').slick({
  centerMode: true,
  centerPadding: '0',
  dots: false,
  arrows: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});