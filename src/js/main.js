$(function () {
    //lấy khoảng cách từ part2 lên trên cùng page
    let position = $(".part2").position();
    const top = position.top;

    //bắt sự kiện trang web cuộn chuột
    $(window).scroll(function () {
        //bắt sự kiện nếu qua phần part2 thì header fixed
        const positionWindow = $(window).scrollTop();
        if (positionWindow >= top) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });

    // $("#a").hover(function () {
    //         // over
    //         $(".dropdown").show();
    //     }, function () {
    //         // out
    //         $(".dropdown").hide();
    //     }
    // );

    $(".owl-carousel").owlCarousel(
        //những option bên dưới ở chỗ api web owl carousel
        {
            items: 3,
            margin: 20,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false
        }
    );

    // $(".dropdown a").hover(function () {
    //         // over
    //         $(".dropdown a .dropdown-image").animate({
    //             display: 'block',
    //             animation: 'FadeInAndFromTopDown 1s forwards'
    //         });
    //     }, function () {
    //         // out
    //         // $(".dropdown a .dropdown-image").css(propertyName, value);
    //     }
    // );
});


