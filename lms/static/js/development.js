$(document).ready(function(){
    $('.partner-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.events__trigger').click(function() {
        $('.events__tabs').toggleClass('-open');
    });

    $('.events__tab').click(function(e) {
        e.preventDefault();

        var thisTabId = $(this).attr('data-tabcontent');
        var thisTabContent = $('#' + thisTabId);

        $('.events__tab').removeClass('-active');
        $(this).addClass('-active');
        $('.events__list').removeClass('-active');
        thisTabContent.addClass('-active');
        $('.events__tabs').removeClass('-open');
    });
});