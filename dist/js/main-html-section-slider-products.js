$(window).on("load", function () {
    $("section.women-products").load("html-section-slider-products.html section.women-products >*", function () {
        $("section.men-products").load("html-section-slider-products.html section.men-products >*", function () {
            FunctionCodeSectionSliderProducts();
        });
    });
});

