$(window).on("load", function () {
    $("section.women-products").load("section-slider-products.html section.women-products >*", function () {
        $("section.men-products").load("section-slider-products.html section.men-products >*", function () {
            CodeSectionSliderProducts();
        });
    });
});

function CodeSectionSliderProducts() {
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

function renderProductsCarousel(list, selector, idSpecial) {
    //thêm hàm reverse vì cái carousel này
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [`
        <div class="item" data-id-product="${val.id}">
            <div class="image">
                <a href="/main-product-detail.html"><img src="${val.image[0]}" alt=""></a>
                ${val.status !== "" ?
                    `
                <div class="product-status">
                    <span>${val.status}</span>
                </div>
                ` : ""}
                
            </div>

            <div class="item-content">
                <div class="brand">
                    <a href="">${val.brand}</a>
                </div>
                <div class="product-group">
                    <a href="">
                        <div class="evaluate">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p class="name">${val.name}</p>
                    </a>
                </div>
                <div class="price">
                    ${val.status !== "" ?
                    `
                    <span class="fixed-price">$${val.price - val.price * (val.status.match(/\d/g).join("")) / 100}</span>
                    <del class="origin-price">$${val.price}</del>
                    ` :
                    `
                    <span class="origin-price">$${val.price}</span>
                    `}                    
                    
                </div>

                ${val.id == idSpecial ?
                    `
                <div class="parameters">
                    <div class="choose-image-references">
                        <button class="blueBorder"><img src="${val.image[0]}" alt=""></button>
                        <button><img src="${val.image[1]}" alt=""></button>
                    </div>
                    <div class="choose-size">
                        <button class="active">S</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                    <div class="choose-materials">
                        <button class="blueBorder"><img src="dist/img/materials/material1.PNG" alt=""></button>
                        <button><img src="dist/img/materials/material2.PNG" alt=""></button>
                        <button><img src="dist/img/materials/material3.PNG" alt=""></button>                            
                    </div>
                </div>
                `
                    : ""}

                <div class="btn-add">
                    <a href=""><i class="far fa-calendar"></i> ADD TO CARD</a>
                </div>
            </div>
            <div class="invisible-part">
                <ul>
                    <li>
                        <a href=""><i class="far fa-eye"></i></a>
                        <div class="description">Quick View</div>
                    </li>
                    <li>
                        <a href=""><i class="far fa-heart"></i></a>
                        <div class="description">You need to login</div>
                    </li>
                    <li>
                        <a href=""><i class="fas fa-balance-scale"></i></a>
                        <div class="description">Add to Compare</div>
                    </li>
                </ul>
            </div>
        </div>
        `, index])
            .trigger("refresh.owl.carousel");
    });
}
