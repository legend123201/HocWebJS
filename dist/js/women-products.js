
$(window).on("load", function () {
    let product = [
        {
            id: 1,
            name: "Rae Suede Sandal",
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
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
            gender: "women",
            price: 180,
            image: ["dist/img/products/Relaxed Painted Oxford Shirt.jpg"],
            brand: "GAP",
            rating: 0,
            status: "Sale 22%",
            category: []
        },
        {
            id: 24,
            name: "Ralph Coffee Hat",
            gender: "women",
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
            gender: "women",
            price: 40,
            image: ["dist/img/products/Paint-Splatter Fleece Pullover.jpg"],
            brand: "ZARA",
            rating: 0,
            status: "",
            category: []
        }
    ]

    $('.women-products .owl-carousel').owlCarousel(
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
    renderProductsCarousel(product, ".women-products .owl-carousel", idSpecialwomen);
    //-----chọn parameters ở products------START
    $(".women-products .slider .item .item-content .parameters .choose-image-references button").click(function (e) {
        e.preventDefault();
        $(".women-products .slider .item .item-content .parameters .choose-image-references button").removeClass("blueBorder");
        $(this).addClass("blueBorder");

        //đổi hình
        let href = $(this).children("img").attr("src"); //lấy link hình của img button đó đang giữ
        let id = $(this).data("id-product"); //ko lấy ngược lên cha của nó đc nên dùng cách tạo và lấy id rồi tìm  
        console.log("href: " + href);
        console.log("id: " + id);
        let arrItems = $(".women-products .owl-carousel .item"); //owl tự cloned các item, vậy nên có active và clone item, length sẽ đc gấp đôi lên, mình sửa cả clone và active là đc, html 2 cái giống nhau
        console.log("arrLen: " + arrItems.length);
        for (let i = 0; i < arrItems.length; i++) {
            let findId = $(arrItems[i]).data("id-product");
            if (findId == id) {
                console.log("ok");
                console.log(arrItems[i]);
                $(arrItems[i]).find(".image img").attr("src", href); //dùng find thì nó tìm hết các phần con, còn children ở trên thì tìm con trực tiếp thôi
                $(arrItems[i]).addClass("background-color");
            }
        }

        //let items = e.item.count;
        //console.log(e.item.count);
        //$(".women-products .owl-carousel").trigger('to.owl.carousel', 2);

    });
    $(".women-products .slider .item .item-content .parameters .choose-size button").click(function (e) {
        e.preventDefault();
        $(".women-products .slider .item .item-content .parameters .choose-size button").removeClass("active");
        $(this).addClass("active");
    });
    $(".women-products .slider .item .item-content .parameters .choose-materials button").click(function (e) {
        e.preventDefault();
        $(".women-products .slider .item .item-content .parameters .choose-materials button").removeClass("blueBorder");
        $(this).addClass("blueBorder");
    });
    //-----chọn parameters ở products------END
});

function renderProductsCarousel(list, selector, idSpecial) {

    //thêm hàm reverse vì cái carousel này
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [`
        <div class="item" data-id-product="${val.id}">
            <div class="image">
                <img src="${val.image[0]}" alt="">
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
