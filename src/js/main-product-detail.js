$(window).on("load", function () {
    let idItemSpecified = Number(localStorage.getItem("idItemSpecified"));
    let itemSpecified = products.find(i => i.id == idItemSpecified);
    $(".product-name").text(itemSpecified.name);
    $(".product-price").text("$" + itemSpecified.price);
    $(".product-detail__images .main-img img").attr("src", itemSpecified.image[0]);


    let arrHeaderSelector = $("header"); //arr các header
    let currentHeaderSelector; //header nào đang hiện thì cho vào đây để sau này dùng 
    for (let i = 0; i < arrHeaderSelector.length; i++) {
        //display đc cấu hình trong css nên ko lo html hay js của header chưa load, có thể để vòng for này ở ngoài hàm scroll
        if ($(arrHeaderSelector[i]).css("display") != "none") {
            currentHeaderSelector = arrHeaderSelector[i];
        }
    }

    //-------------XỬ LÝ CUỘN CHUỘT CHO PRODUCT IMAGE POSITION CUỘN THEO TRANG WEB-----------START
    function scrollExcuteCode() {
        //Từ đầu các biến, các đoạn xử lý đc để ở ngoài để tối ưu code, mỗi khi hàm này đc gọi (gọi trong hàm scroll) thì gọi ít thôi, nhưng vì file này liên quan tới file header.js, nó cần file đó chạy xong, mà nó lại chạy song song với file header.js, nên html của header (dòng load() bên file header) chưa load xong mà cái này đã chạy. dẫn đến việc outerHeight sai, offset và position cũng sai
        //Muốn tối ưu hơn còn 1 cách tạo 1 cái flag, là đã scroll lần đầu hay chưa, chưa thì chạy code nhập giá trị này kia cho các biến, còn rồi thì chạy các dòng cần thiết thôi

        //mình phải lấy đc chiều cao lúc header fixed, vì header lúc đầu có cái hình nên height rất là cao, trên web cũng chỉ xử lý với height đã fixed
        let currentFixedHeaderOuterHeight;
        if ($(currentHeaderSelector).hasClass("fixed") == false) {
            $(currentHeaderSelector).addClass("fixed");
            currentFixedHeaderOuterHeight = $(currentHeaderSelector).outerHeight(true);//header có padding
            $(currentHeaderSelector).removeClass("fixed");
        }
        else{
            currentFixedHeaderOuterHeight = $(currentHeaderSelector).outerHeight(true);//header có padding
        }

        //headerBottomPositionWith10px nằm trong khoảng start và end break point thì mới sửa css
        let startBreakpoint = $(".product-detail").offset().top;
        let productDetailOffsetBottom = $(".product-detail").offset().top + $(".product-detail").height();//cái nào ko có mar, pad nên dùng height() là đủ
        let endBreakpoint = productDetailOffsetBottom - $(".product-detail__images .image").height();

        //lấy chiều cao của header + 10px là ra đường break point chuẩn để position cái image
        let headerBottomPositionWith10px = $(window).scrollTop() + currentFixedHeaderOuterHeight + 10;
        if (headerBottomPositionWith10px < startBreakpoint) {
            $(".image").css({ "top": `0px`, "left": "0", "bottom": `unset` });
        }
        else if (headerBottomPositionWith10px > endBreakpoint) {
            $(".image").css({ "bottom": `0px`, "left": "0", "top": "unset" });
        }
        else {
            let productDetailOffsetTop = $(".product-detail").offset().top;
            let khucTangThem = headerBottomPositionWith10px - productDetailOffsetTop;
            $(".image").css({ "top": `${khucTangThem}px`, "left": "0", "bottom": `unset` });
        }
    };

    $(window).scroll(function () {
        scrollExcuteCode(); //hàm scrollExcuteCode() ko chỉ đc gọi ở đây, nó còn đc gọi ở 1 nơi khác, đây chính là lí do tạo ra hàm này
    });

    //-------------XỬ LÝ CUỘN CHUỘT CHO PRODUCT IMAGE POSITION CUỘN THEO TRANG WEB-----------END

    //-------------ẤN VÀO TIÊU ĐỀ DECRIPTION THÌ DROPDOWN TRƯỢT LÊN TRƯỢT XUỐNG------------START
    $(".product-detail__content .description ul li .title").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).next().slideToggle(200, function () {
            // Animation complete.
            productDetailOffsetBottom = $(".product-detail").offset().top + $(".product-detail").height();//cái nào ko có mar, pad nên dùng height() là đủ
            endBreakpoint = productDetailOffsetBottom - $(".product-detail__images .image").height();

            scrollExcuteCode(); //dùng hàm này để cập nhật ví trí cho image khi nội dung product detail dài ra hoặc ngắn lại.
        });
    });
    //-------------ẤN VÀO TIÊU ĐỀ DECRIPTION THÌ DROPDOWN TRƯỢT LÊN TRƯỢT XUỐNG------------END

    //-------------LOAD VÀO SLIDE PRODUCTS------------START
    $('.slider-products .owl-carousel').owlCarousel(
        //những option bên dưới ở chỗ api web owl carousel
        {
            items: 4,
            margin: 20,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,

            responsive: {
                0: {
                    items: 2,
                },
                769: {
                    items: 3,
                },
                993: {
                    items: 4,
                },
                1201: {
                    items: 4,
                    nav: true,
                }
            }
        }
    );
    let idSpecialwomen = -1;
    renderProductsCarousel(products, ".slider-products .owl-carousel", idSpecialwomen);
    //-------------LOAD VÀO SLIDE PRODUCTS------------END

    //-------------LOAD VÀO SLICK SUB-IMAGES------------START
    $('.sub-images').slick({
        slidesToShow: 5,
        // slidesToScroll: 1,
        // dots: false,
        vertical: true,
        verticalSwiping: true,
        arrows: true
    });
    //-------------LOAD VÀO SLICK SUB-IMAGES------------END

    //khi chỉnh sửa màn hình thì cập nhật lại 1 số thứ
    $(window).resize(function () {
        //cập nhật lại header đang dùng cho màn hình nào
        for (let i = 0; i < arrHeaderSelector.length; i++) {
            if ($(arrHeaderSelector[i]).css("display") != "none") {
                currentHeaderSelector = arrHeaderSelector[i];
            }
        }
    });
});