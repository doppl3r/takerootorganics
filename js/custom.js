(function($) {
    $(document).ready(function() {
        $('.product-carousel').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }
            ]
        });
    });
})(jQuery);