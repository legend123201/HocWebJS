$(window).on("load", function () {
    let arrHeaderSelector = $("header"); //arr các header
    let currentHeaderSelector; //header nào đang hiện thì cho vào đây để sau này dùng 
    for (let i = 0; i < arrHeaderSelector.length; i++) {
        if ($(arrHeaderSelector[i]).css("display") != "none") {
            currentHeaderSelector = arrHeaderSelector[i];
        }
    }

    /*
    //biến x này giải thích bên dưới
    let x = 0;
    let productDetailOffsetTop = $(".product-detail").offset().top;
    let imageWrapperOffsetBottom = $(".product-detail__images").offset().top + $(".product-detail__images").height(); //ko cần lấy margin (outerHeight) vì .image ko có margin
    //bắt sự kiện trang web cuộn chuột
    $(window).scroll(function () {
        //lấy chiều cao của header + 10px là ra đường break point chuẩn để position cái image
        let headerBottomPositionWith10px = $(window).scrollTop() + $(currentHeaderSelector).outerHeight(true) + 10;
        if(headerBottomPositionWith10px < productDetailOffsetTop){
            $(".image").css({ "top": `0px`, "left": "0", "bottom": `unset` });
            return;
        }
        if (imageOffsetBottom + 2 > imageWrapperOffsetBottom) {
            $(".image").css({ "bottom": `0px`, "left": "0", "top": "unset" });
            if (x == 0) {
                x = $(".product-detail__images .image").offset().top;            
            }

        }

        let imageOffsetBottom = $(".product-detail__images .image").offset().top + $(".product-detail__images .image").height();

        //nếu có class fixed thì mới thay đổi position của image
        if ($(currentHeaderSelector).hasClass("fixed")) {
            

            //cái mệnh đề bên trái dành cho kéo xuống, bên phải dành cho kéo lên
            //kéo xuống thì cập nhật top cho image khi vị trí bottom của image vẫn nhỏ hơn vị trí bottom thằng cha chứa nó, cộng 2 để làm to số lên 2 đơn vị, vì khi css bottom:0; cho cái image, thì vị trí bottom của nó với vị trí của thằng cha nó cách nhau 0.00001, cái image nó cứ nhỏ hơn hoài (vì image nằm trong cha của nó), đây là sự chênh lệch số học hi hữu
            //kéo lên thì cái đường break point chuẩn mà đụng vào cái top của cái image khi nó có css bottom:0 thì bắt đầu cập nhật top cho nó lại, cho nó đi lên. biến x khởi tạo là 0, chỉ đc cập nhật khi mà cái image css bottom 0 lần đầu tiên
            if ((headerBottomPositionWith10px >= productDetailOffsetTop && imageOffsetBottom + 2 <= imageWrapperOffsetBottom) || headerBottomPositionWith10px <= x) {
                //đường break point chuẩn đụng cái product-detail là thay đổi top liền
                //if (headerBottomPositionWith10px >= productDetailOffsetTop) {
                    let khucTangThem = headerBottomPositionWith10px - productDetailOffsetTop;
                    $(".image").css({ "top": `${khucTangThem}px`, "left": "0", "bottom": `unset` });
                //}
                // } else {
                //     $(".image").css({ "top": `0px`, "left": "0", "bottom": `unset` });
                // }
            }
            
            
        }
    });
    */

    //headerBottomPositionWith10px nằm trong khoảng start và end break point thì mới sửa css
    let startBreakpoint = $(".product-detail").offset().top;
    let productDetailOffsetBottom = $(".product-detail").offset().top + $(".product-detail").height();//cái nào ko có mar, pad nên dùng height() là đủ
    let endBreakpoint = productDetailOffsetBottom - $(".product-detail__images .image").height();

    //mình phải lấy đc chiều cao lúc header fixed, vì header lúc đầu có cái hình nên height rất là cao, trên web cũng chỉ xử lý với height đã fixed
    $(currentHeaderSelector).addClass("fixed");
    let currentFixedHeaderOuterHeight = $(currentHeaderSelector).outerHeight(true);//header có margin
    $(currentHeaderSelector).removeClass("fixed");

    let productDetailOffsetTop = $(".product-detail").offset().top;
    $(window).scroll(function () {
        
            //lấy chiều cao của header + 10px là ra đường break point chuẩn để position cái image
            let headerBottomPositionWith10px = $(window).scrollTop() + currentFixedHeaderOuterHeight + 10; 
            if (headerBottomPositionWith10px < startBreakpoint) {
                $(".image").css({ "top": `0px`, "left": "0", "bottom": `unset` });
            }
            else if (headerBottomPositionWith10px > endBreakpoint) {
                $(".image").css({ "bottom": `0px`, "left": "0", "top": "unset" });
            }
            else {
                let khucTangThem = headerBottomPositionWith10px - productDetailOffsetTop;
                $(".image").css({ "top": `${khucTangThem}px`, "left": "0", "bottom": `unset` });
            }
        
    });

    //khi chỉnh sửa màn hình thì cập nhật lại 1 số thứ
    $(window).resize(function () {
        for (let i = 0; i < arrHeaderSelector.length; i++) {
            if ($(arrHeaderSelector[i]).css("display") != "none") {
                currentHeaderSelector = arrHeaderSelector[i];
            }
        }
    });
});