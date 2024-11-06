//menu section start
document.querySelector(".menu img").addEventListener('click', () => {
    if (document.querySelector(".sidebar-section").style.height === "0px") {
        document.querySelector(".sidebar-section").style.height = "200px"
    } else {
        document.querySelector(".sidebar-section").style.height = "0px"
    }
})
//menu section end
//slider section start

$(document).ready(function () {

    var owl = $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


    $('.left').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.right').on('click', function () {
        owl.trigger('next.owl.carousel');
    });
});
$(document).ready(function () {
    var owlCarousel2 = $(".owl-carousel-2").owlCarousel({
        loop: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    $(".left-2").click(function () {
        owlCarousel2.trigger('prev.owl.carousel');
    });


    $(".right-2").click(function () {
        owlCarousel2.trigger('next.owl.carousel');
    });
});

//slider section end

