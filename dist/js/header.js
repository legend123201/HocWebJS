$(document).ready(function () {
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
    //li:not(.back) nghĩa là li ko phải class back, có thể sửa là li:not(:first-child) nếu nó là first child
    $("header.small-screen .level-2 >ul >li:not(.back) >a").click(function (e) { 
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
        let css = "translateX(" + valueCurrentTranlateX +"px)";
        $("header.small-screen .level-1").css("transform", css);
    });

    //bấm vào class close thì page nav biến mất
    $("header.small-screen .close >a").click(function (e) { 
        e.preventDefault();
        $("header.small-screen .page-nav").css("transform", "translateX(-101%)");
        $("header.small-screen .modal").fadeOut();//cái này mờ dần sau đó display none, siêu đã
        //$("header.small-screen .modal").css("display", "none"); //cái này ko xài vì mất nhanh
    });

    //bấm vào humberger-btn thì page nav hiện ra
    $("header.small-screen .humberger-btn a").click(function (e) { 
        e.preventDefault();
        $("header.small-screen .page-nav").css("transform", "translateX(0)");
        //$("header.small-screen .modal").css("display", "block");
        $("header.small-screen .modal").fadeIn();//cái này hiện dần sau đó display block, siêu đã

        //dòng này quan trọng, nãy mình tắt page nav thì mình tắt transition, giờ phải mở lại
        $("header.small-screen .level-1").css("transition", "all 0.4s");
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

    let t = $("header.small-screen .level-1 >ul >li >a");
    console.log(t.length);
    let t2 = $('header.small-screen .level-1').css('transform');
    console.log(t2);

});