$(window).on("load", function () {
    $("section.women-start").load("section-start.html section.women-start >*",function(){
        $("section.men-start").load("section-start.html section.men-start >*");
    });
});