$(document).ready(function(){
    //banner
    $('.banner-slider-all').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
    });
    //mobile screen slider
    $('.all-screen-slider').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
    $('.feedback-text-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        asNavFor:".all-img-slider",
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
    $('.all-img-slider').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        autoplaySpeed: 2000,
        dots: true,
        asNavFor:".feedback-text-slider",
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
    new VenoBox({
        selector: '.my-video-links',
    });
});
