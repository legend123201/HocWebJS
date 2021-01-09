$(function () {

    let product = [
        {
            id: 1,
            name: "Rae Suede Sandal",
            gender: "woman",
            price: 100,
            image: ["dist/img/products/Rae Suede Sandal.jpg"],
            brand: "GUESS",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 2,
            name: "Polka-Dot Lightweight Scarf",
            gender: "woman",
            price: 80,
            image: ["dist/img/products/Polka-Dot Lightweight Scarf.jpg"],
            brand: "LACOSTE",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 3,
            name: "Pink Pony Leather Sneaker",
            gender: "woman",
            price: 60,
            image: ["dist/img/products/Pink Pony Leather Sneaker.jpg"],
            brand: "POLO",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 4,
            name: "Product Layout",
            gender: "woman",
            price: 500,
            image: ["dist/img/products/Product Layout.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 5,
            name: "Skinny Fit Stretch Mesh Polo",
            gender: "woman",
            price: 20,
            image: ["dist/img/products/Skinny Fit Stretch Mesh Polo.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 6,
            name: "Slim Fit Cotton Oxford Shirt",
            gender: "woman",
            price: 500,
            image: ["dist/img/products/Slim Fit Cotton Oxford Shirt.jpg", "dist/img/products/Slim_Fit_Cotton_Oxford_Shirt_Pink.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 7,
            name: "Relaxed-Fit Cotton Shirt",
            gender: "woman",
            price: 480,
            image: ["dist/img/products/Relaxed-Fit Cotton Shirt.jpg"],
            brand: "GUESS",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 8,
            name: "Viscose-Cashmere Scarf",
            gender: "woman",
            price: 440,
            image: ["dist/img/products/Viscose-Cashmere Scarf.jpg"],
            brand: "LACOSTE",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 9,
            name: "Tailored Fit Mesh-Panel Polo",
            gender: "woman",
            price: 420,
            image: ["dist/img/products/Tailored Fit Mesh-Panel Polo.jpg"],
            brand: "POLO",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 10,
            name: "Tailored Fit Mesh-Panel Polo",
            gender: "woman",
            price: 460,
            image: ["dist/img/products/Tailored Fit Mesh-Panel Polo2.jpg"],
            brand: "ZARA",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 11,
            name: "Premier Cropped Skinny Jean",
            gender: "woman",
            price: 380,
            image: ["dist/img/products/Premier Cropped Skinny Jean.jpg"],
            brand: "GAP",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 12,
            name: "Woven Shield Sunglasses",
            gender: "woman",
            price: 360,
            image: ["dist/img/products/Woven Shield Sunglasses.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 13,
            name: "Two-Tone Sleeveless Dress",
            gender: "woman",
            price: 340,
            image: ["dist/img/products/Two-Tone Sleeveless Dress.jpg"],
            brand: "GUESS",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 14,
            name: "Twill 2-Button Jacket",
            gender: "woman",
            price: 320,
            image: ["dist/img/products/Twill 2-Button Jacket.jpg"],
            brand: "LACOSTE",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 15,
            name: "The Ricky Mirrored Sunglasses",
            gender: "woman",
            price: 300,
            image: ["dist/img/products/The Ricky Mirrored Sunglasses.jpg"],
            brand: "POLO",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 16,
            name: "Striped Funnelneck Pullover",
            gender: "woman",
            price: 280,
            image: ["dist/img/products/Striped Funnelneck Pullover.jpg"],
            brand: "ZARA",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 17,
            name: "Striped Cap-Sleeve Polo",
            gender: "woman",
            price: 260,
            image: ["dist/img/products/Striped Cap-Sleeve Polo.jpg"],
            brand: "GAP",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 18,
            name: "Stretch Cotton Skinny Pant",
            gender: "woman",
            price: 240,
            image: ["dist/img/products/Stretch Cotton Skinny Pant.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 19,
            name: "Silk Polka-Dot Scarf",
            gender: "woman",
            price: 220,
            image: ["dist/img/products/Silk Polka-Dot Scarf.jpg"],
            brand: "GUESS",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 20,
            name: "Saffiano Leather Belt",
            gender: "woman",
            price: 200,
            image: ["dist/img/products/Saffiano Leather Belt.jpg"],
            brand: "LACOSTE",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 21,
            name: "Rounded Cat Eye Sunglasses",
            gender: "woman",
            price: 180,
            image: ["dist/img/products/Rounded Cat Eye Sunglasses.jpg"],
            brand: "POLO",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 22,
            name: "Reversible Down Vest",
            gender: "woman",
            price: 160,
            image: ["dist/img/products/Reversible Down Vest.jpg"],
            brand: "ZARA",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 23,
            name: "Relaxed Painted Oxford Shirt",
            gender: "woman",
            price: 180,
            image: ["dist/img/products/Relaxed Painted Oxford Shirt.jpg"],
            brand: "GAP",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 24,
            name: "Ralph Coffee Hat",
            gender: "woman",
            price: 120,
            image: ["dist/img/products/Ralph Coffee Hat.jpg"],
            brand: "LEVI'S",
            rating: 0,
            status: "",
            category: []
        },
        {
            id: 25,
            name: "Paint-Splatter Fleece Pullover",
            gender: "woman",
            price: 40,
            image: ["dist/img/products/Paint-Splatter Fleece Pullover.jpg"],
            brand: "ZARA",
            rating: 0,
            status: "",
            category: []
        }
    ]

    $('.woman-products .owl-carousel').owlCarousel(
        //những option bên dưới ở chỗ api web owl carousel
        {
            items: 6,
            margin: 20,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,
            mouseDrag: false
        }
    );
    
    let idSpecialWoman = 6;
    renderProductsCarousel(product, ".woman-products .owl-carousel", idSpecialWoman);
    
    //chọn parameters ở products
    $(".woman-products .slider .item .item-content .parameters .choose-image-references button").click(function (e) { 
        e.preventDefault();
        $(".woman-products .slider .item .item-content .parameters .choose-image-references button").removeClass("blueBorder");
        $(this).addClass("blueBorder");
        
        //đổi hình
        let href = $(this).children("img").attr("src"); //lấy link hình của img button đó đang giữ
        let id = $(this).data("id-product"); //ko lấy ngược lên cha của nó đc nên dùng cách tạo và lấy id rồi tìm  
        console.log("href: " + href);
        console.log("id: " + id);
        let arrItems = $(".woman-products .owl-carousel .item"); //owl tự cloned các item, vậy nên có active và clone item, length sẽ đc gấp đôi lên, mình sửa cả clone và active là đc, html 2 cái giống nhau
        console.log("arrLen: " + arrItems.length);
        for(let i = 0; i < arrItems.length; i++){
            let findId = $(arrItems[i]).data("id-product");
            if(findId == id){
                console.log("ok");
                console.log(arrItems[i]);
                $(arrItems[i]).find(".image img").attr("src", href); //dùng find thì nó tìm hết các phần con, còn children ở trên thì tìm con trực tiếp thôi
                $(arrItems[i]).addClass("background-color");
            }
        }
        
        //let items = e.item.count;
        //console.log(e.item.count);
        //$(".woman-products .owl-carousel").trigger('to.owl.carousel', 2);
        
    });
    $(".woman-products .slider .item .item-content .parameters .choose-size button").click(function (e) { 
        e.preventDefault();
        $(".woman-products .slider .item .item-content .parameters .choose-size button").removeClass("active");
        $(this).addClass("active");
    });
    $(".woman-products .slider .item .item-content .parameters .choose-materials button").click(function (e) { 
        e.preventDefault();
        $(".woman-products .slider .item .item-content .parameters .choose-materials button").removeClass("blueBorder");
        $(this).addClass("blueBorder");
    });

    //-------------phần dưới của buổi học lần trc
    $(".products-owl .owl-carousel").owlCarousel(
        {
            // items: 3,
            // margin: 20,
            // loop: true,
            // nav: true,
            // navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            // dots: true
        }
    );

    const products = [
        {
            id: 1,
            name: "Black Beard",
            category: ["electronic", "furniture", "cloth"]
        },
        {
            id: 2,
            name: "Apple",
            category: ["electronic", "furniture"]
        },
        {
            id: 3,
            name: "Samsung",
            category: ["electronic", "cloth"]
        },
        {
            id: 4,
            name: "iPhone",
            category: ["electronic", "furniture"]
        },
        {
            id: 5,
            name: "XiaoMi",
            category: ["electronic"]
        }
    ];

    //renderOwl(products, ".products-owl .owl-carousel");
    const allCategory = $(".products .category a");
    for (let i = 0; i < allCategory.length; i++) {
        if ($(allCategory[i]).hasClass("active")) {
            const category = $(allCategory[i]).data("category");
            const activeProducts = products.filter((val) =>
                val.category.includes(category)
            );
            renderOwl(activeProducts, ".products-owl .owl-carousel");
        }
    }

    $(".products .category a").click(function (e) {
        e.preventDefault();
        $(".products .category a").removeClass("active");
        $(this).addClass("active");

        //lấy category
        const category = $(this).data("category");
        const filterProducts = products.filter((val) => val.category.includes(category));
        removeOwl(products, ".products-owl .owl-carousel");
        renderOwl(filterProducts, ".products-owl .owl-carousel");
    });

    //d09122020
    $(".show-modal").click(function (e) {
        e.preventDefault();
        //$(".modal").show(); // bằng với display: block
        $(".modal").fadeIn(); // bằng với display: block + opacity dần dần
        $(".modal").click(function (e) {
            e.preventDefault();
            //$(".modal").hide();
            $(".modal").fadeOut();
        });
    });
    $(".modal-content").click(function (e) {
        e.preventDefault();
        e.stopPropagation(); //ngăn sự lan truyền của cùng một sự kiện được gọi
    });
});

function removeProductsCarousel(list, selector) {
    //remove all item in owl
    for (let i = 0; i < list.length; i++) {
        $(selector)
            .trigger("remove.owl.carousel", i)
            .trigger("refresh.owl.carousel");
    }
    //$(selector).trigger("replace.owl.carousel","").trigger("refresh.owl.carousel");
}

function renderProductsCarousel(list, selector, idSpecial) {

    //thêm hàm reverse vì cái carousel này
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [`
        <div class="item" data-id-product="${val.id}">
            <div class="image">
                <img src="${val.image[0]}" alt="">
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
                    $${val.price - 100 >= 500 ? 0 : val.price}
                </div>

                ${val.id == idSpecial ? 
                `
                <div class="parameters">
                    <div class="choose-image-references">
                        <button class="blueBorder" data-id-product="${val.id}"><img src="${val.image[0]}" alt=""></button>
                        <button data-id-product="${val.id}"><img src="${val.image[1]}" alt=""></button>
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
        </div>
        `, index])
            .trigger("refresh.owl.carousel");
    });
}

function removeOwl(list, selector) {
    //remove all item in owl
    for (let i = 0; i < list.length; i++) {
        $(selector)
            .trigger("remove.owl.carousel", i)
            .trigger("refresh.owl.carousel");
    }
    //$(selector).trigger("replace.owl.carousel","").trigger("refresh.owl.carousel");
}

function renderOwl(list, selector) {
    //thêm hàm reverse vì cái carousel này  
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [`<div class = "item">${val.name}</div>`, index])
            .trigger("refresh.owl.carousel");
    });
}