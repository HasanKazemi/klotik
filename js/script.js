$(function () {
    // $(window).click(function() {
    //     $('#phone-menu').hide();
    // });
    // $('.no-shadow').click(function(event) {
    //     event.stopPropagation();
    //     $('#phone-menu').show();
    // });
    // $('#phone-menu').click(function (event) {
    //     event.stopPropagation();
    // });
    // // submenu
    // let acc = $(".square-plus");
    // for (let i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //         let panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // }
    $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: false,
        dots: false,
        stagePadding: 0,
        nav: true,
        responsive : {
            0 : {
                items: 2
            },
            768 : {
                items: 6
            }
        }
    });

    $(".owl-carousel .card").hover(function(){
        $(this).find(".select-colors-span").delay(500).css('border-radius','0px 10px 10px 0px')
        $(this).find(".select-colors-link").fadeIn(500)
    },function(){
        $(this).find(".select-colors-span").delay(500).css('border-radius','10px 10px 10px 10px')
        $(this).find(".select-colors-link").stop().fadeOut(1)
    })
});
