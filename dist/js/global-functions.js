function renderProductsCarousel(list, selector, idSpecial) {
    //thêm hàm reverse vì cái carousel này load ra ko theo thứ tự của cái list mình đưa vào, mà nó bị ngược
    list.reverse().map((val, index) => {
        $(selector)
            .trigger("add.owl.carousel", [`
        <div class="item" data-id-product="${val.id}">
            <div class="image">
                <a href="/html-main-product-detail.html"><img src="${val.image[0]}" alt=""></a>
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

function DrawALine(height){
    $("body").css("position", "relative");
    $("body").prepend(`<div style="background-color: red; position: absolute; height: 1px; width: 100%; top: ${height}px; z-index: 999;"></div>`);
}
