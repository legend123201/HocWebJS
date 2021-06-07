function FunctionCodeSectionSliderProducts() {
    $('.slider-products .owl-carousel').owlCarousel(
        //những option bên dưới ở chỗ api web owl carousel
        {
            items: 6,
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
                    items: 6,
                    nav: true,
                }
            }
        }
    );

    let idSpecialwomen = 6;
    renderProductsCarousel(products, ".slider-products .owl-carousel", idSpecialwomen);
    //-----chọn parameters ở products------START
    $(".slider-products .slider .item .item-content .parameters .choose-image-references button").click(function (e) {
        e.preventDefault();

        let current = $(this); //current sẽ tìm cái .item hiện tại mà mình đang thao tác, khởi tạo nó là cái nút, và chạy ngược từ từ lên
        while($(current).hasClass("item") == false){
            current = current.parent();
        }

        //tô đậm cái nút đang bấm và xoá tô đậm cái nút còn lại
        $(current).find(".item-content .parameters .choose-image-references button").removeClass("blueBorder");
        $(this).addClass("blueBorder");

        //đổi hình
        let href = $(this).children("img").attr("src"); //lấy link hình của img button đó đang giữ    
        $(current).find(".image img").attr("src", href); 
        
    });
    $(".slider-products .slider .item .item-content .parameters .choose-size button").click(function (e) {
        e.preventDefault();
        let current = $(this); //current sẽ tìm cái .item hiện tại mà mình đang thao tác, khởi tạo nó là cái nút, và chạy ngược từ từ lên
        while($(current).hasClass("item") == false){
            current = current.parent();
        }
        $(current).find(".item-content .parameters .choose-size button").removeClass("active");
        $(this).addClass("active");
    });
    $(".slider-products .slider .item .item-content .parameters .choose-materials button").click(function (e) {
        e.preventDefault();
        let current = $(this); //current sẽ tìm cái .item hiện tại mà mình đang thao tác, khởi tạo nó là cái nút, và chạy ngược từ từ lên
        while($(current).hasClass("item") == false){
            current = current.parent();
        }
        $(current).find(".item-content .parameters .choose-materials button").removeClass("blueBorder");
        $(this).addClass("blueBorder");
    });
    //-----chọn parameters ở products------END

    $(".item >.image >a").click(function (e) {
        //e.preventDefault();
        //const v = JSON.parse(localStorage.getItem("v")) || 0;
        let current = $(this); //current sẽ tìm cái .item hiện tại mà mình đang thao tác, khởi tạo nó là cái nút, và chạy ngược từ từ lên
        while($(current).hasClass("item") == false){
            current = current.parent();
        }
        
        localStorage.setItem("idItemSpecified", $(current).data("id-product").toString());
    });
}

