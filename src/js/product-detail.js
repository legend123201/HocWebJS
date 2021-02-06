$(window).on("load", function () {
    //bắt sự kiện trang web cuộn chuột
    const x = $(".image").offset().top - 10;
    $(window).scroll(function () {
        /*
        
        let a = $(".lala").position().top - 10;
        if ($(window).scrollTop() >= a) {
            $(".image").css({"top":`${$(window).scrollTop()}px`, "left":"0"});
        } else {
            $(".image").css({"top":`0px`, "left":"0"});
        }*/
        //console.log($(window).scrollTop());
        
        if ($(window).scrollTop() >= x) {
            $(".part1").css({"position":"fixed","top":`0px`, "left":"0", "z-index":"1", "width":"100%"});
            let khucTangThem = $(window).scrollTop() - $(".one").offset().top;
            let top =  khucTangThem + 10 + $(".part1").height();
            $(".image").css({"top":`${top}px`, "left":"0"});
        } else {
            $(".image").css({"top":`0px`, "left":"0"});
            $(".part1").css("position","unset");
        }

    });

});