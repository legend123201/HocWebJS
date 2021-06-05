$(window).on("load", function () {
    $("header.big-screen").load("html-header.html .big-screen >*", function(){
        $("header.small-screen").load("html-header.html .small-screen >*", function(){
            CodeHeader();
        });
    });
});

function CodeHeader(){
    $('header.big-screen .owl-carousel').owlCarousel(
        //những option bên dưới ở chỗ api web owl carousel
        {
            items: 3,
            margin: 20,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,
        }
    );

    let currentIndexUpToNow = 1; //biến này sẽ giữ giá trị index và gán cho cái nav nào cần nổi lên của header, cứ tự cộng lên hoài
    let widthNavLevel1 = $("header.small-screen .level-1").width();
    let valueCurrentTranlateX = 0; //phải tạo biến cái này vì nếu dùng get css transform nhưng mà nó sẽ trả về 1 matrix, hồi xưa tranlateX là phần tử index 5 trong matrix, giờ thì là 4, có sự thay đổi nên hơi nguy hiểm
    //bấm vào nav level-1 thì level-1 lùi 100%
    $("header.small-screen .level-1 >ul >li:not(.close) >a").click(function (e) {
        e.preventDefault();
        $("header.small-screen .level-1").css("transform", "translateX(-100%)");
        valueCurrentTranlateX -= widthNavLevel1;
        console.log(valueCurrentTranlateX + ":           1");
        $(this).next().css("z-index", currentIndexUpToNow);
        //$(this).css("background-color", "red");
        currentIndexUpToNow++;
    });

    //bấm vào nav level-2 thì level-1 lùi 200%
    //li:not(.back, .back +li) nghĩa là li ko phải class back, có thể sửa là li:not(:first-child) nếu nó là first child, và ko phải li ngay đằng sau của class back
    //
    $("header.small-screen .level-2 >ul >li:not(.back,.back +li) >a").click(function (e) {
        e.preventDefault();
        $("header.small-screen .level-1").css("transform", "translateX(-200%)");
        valueCurrentTranlateX -= widthNavLevel1;
        console.log(valueCurrentTranlateX + "            2");
        $(this).next().css("z-index", currentIndexUpToNow);
        currentIndexUpToNow++;
    });
    //bấm vào class back thì quay lại
    $("header.small-screen .back >a").click(function (e) {
        e.preventDefault();
        //e.stopPropagation(); //từ đầu code bên trên ko có :not(.back), thì sử dụng cái này để khi nhấn vào back thì chỉ có code ở đây dùng thôi, nhưng ko sử dụng đc vì cái này ngăn sự lan truyền của cùng một sự kiện được gọi (chỉ phù hợp với quan hệ cha con)
        valueCurrentTranlateX += widthNavLevel1;
        console.log(valueCurrentTranlateX + "            3");
        let css = "translateX(" + valueCurrentTranlateX + "px)";
        $("header.small-screen .level-1").css("transform", css);
    });

    //bấm vào class close thì page nav biến mất
    $("header.small-screen .close >a").click(function (e) {
        e.preventDefault();
        $("header.small-screen .page-nav").css("transform", "translateX(-101%)");
        $("header.small-screen .modal").fadeOut();//cái này mờ dần sau đó display none, siêu đã
        //$("header.small-screen .modal").css("display", "none"); //cái này ko xài vì mất nhanh
        $("body").css("overflow", "unset"); //page nav mất đi thì cho trang đc phép scroll như bình thường
    });

    //bấm vào humberger-btn thì page nav hiện ra
    $("header.small-screen .humberger-btn a").click(function (e) {
        e.preventDefault();
        $("header.small-screen .page-nav").css("transform", "translateX(0)");
        //$("header.small-screen .modal").css("display", "block");
        $("header.small-screen .modal").fadeIn();//cái này hiện dần sau đó display block, siêu đã
       
        //dòng này quan trọng, nãy mình tắt page nav thì mình tắt transition, giờ phải mở lại
        $("header.small-screen .level-1").css("transition", "all 0.4s");

        $("body").css("overflow", "hidden"); //page nav hiện lên thì ko cho scroll tùm lum trên page nữa
    });

    $("header.small-screen .modal").click(function (e) {
        e.preventDefault();
        $("header.small-screen .page-nav").css("transform", "translateX(-101%)");
        $("header.small-screen .modal").fadeOut();//cái này mờ dần sau đó display none, siêu đã
        //$("header.small-screen .modal").css("display", "none"); //cái này ko xài vì mất nhanh

        // //code reset lại lịch sử bấm vào page nav, cho nó lại level 1, có dòng transition none bởi vì khi mình tắt đi thì nó ko có bị cuộn về từ từ nhìn nhức mắt
        valueCurrentTranlateX = 0;
        $("header.small-screen .level-1").css("transform", "translateX(0)");
        $("header.small-screen .level-1").css("transition", "none"); //đặt dòng này ở đâu thì nó cũng chạy "song song đầu tiên" (cái transform ở trên bị dòng này tác động ko có transition đc), kiểu như nó biên dịch hết các css 1 thể rồi chạy 1 lần
    });

    $("body").prepend("<div class='fake-header'></div>");
    //lấy khoảng cách từ part2 lên trên cùng page
    let part2PositionTop = $("header").last().next().position().top; //có 2 header, thì lấy cái header cuối trỏ next là ra cái part2.
    
    //bắt sự kiện trang web cuộn chuột
    $(window).scroll(function () {
        part2PositionTop = $("header").last().next().position().top;
        //DrawALine(part2PositionTop);
        //bắt sự kiện nếu qua phần position top part2 thì header fixed, position top part2 này thực ra có thay đổi, nhưng mình chỉ lấy cái giá trị đầu tiên khi trang đc load làm chuẩn và cho vào biến const, làm như thế thì khi cuộn sẽ tạo cảm giác cái header luôn ở đó
        //$(window).scrollTop(); //lấy vị trí trên của màn hình để tính
        if ($(window).scrollTop() >= part2PositionTop) {
            $("header").addClass("fixed");
            $(".fake-header").css("height", part2PositionTop); //ko dùng jq get height cho header, bởi vì nó ko tính margin, padding, border của header.với cả height của 2 cái big screen và small screen cũng khác nhau, lại phải làm if else mệt người
        } else {
            $("header").removeClass("fixed");
            $(".fake-header").css("height", 0);
        }
    });

    //khi chỉnh sửa màn hình thì cập nhật lại 1 số thứ
    $(window).resize(function () {
        //khi resize phải đưa fake header về 0, vì khi chuyển mobile qua desktop hay ngược lại thì fake header của mỗi màn hình đương nhiên là khác nhau, mà ko set về 0 rồi lập lại thì khi chuyển laptop qua mobile chẳng hạn, thì cái fake vẫn giữ của laptop,rồi nó lấy cái part2Position bị sai là đương nhiên
        $(".fake-header").css("height", "0");
        if($("header").hasClass("fixed")){
            $("header").removeClass("fixed");
            part2PositionTop = $("header").last().next().offset().top;
            $("header").addClass("fixed");
            $(".fake-header").css("height", part2PositionTop);
        }else{
            part2PositionTop = $("header").last().next().offset().top;
        }
        part2PositionTop = $("header").last().next().offset().top;
        widthNavLevel1 = $("header.small-screen .level-1").width();
    });
}
