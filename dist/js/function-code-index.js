function FunctionCodeIndex() {
    //load header
    $("header.big-screen").load("html-header.html .big-screen >*", function () {
        $("header.small-screen").load("html-header.html .small-screen >*", function () {
            
            //load section start
            $("section.women-start").load("html-section-start.html section.women-start >*", function () {
                $("section.men-start").load("html-section-start.html section.men-start >*", function () {
                    
                    //load section-slider-products
                    $("section.women-products").load("html-section-slider-products.html section.women-products >*", function () {
                        $("section.men-products").load("html-section-slider-products.html section.men-products >*", function () {
                            
                            //load footer
                            $("footer").load("html-footer.html footer >*", function () {
                                FunctionCodeHeader();
                                FunctionCodeSectionStart();
                                FunctionCodeSectionSliderProducts();
                                FunctionCodeFooter();
                            });
                        });
                    });
                });
            });
        });
    });
}