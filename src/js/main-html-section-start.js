$(window).on("load", function () {
    $("section.women-start").load("html-section-start.html section.women-start >*",function(){
        $("section.men-start").load("html-section-start.html section.men-start >*",function(){
            FunctionCodeSectionStart();
        });
    });
});