$(window).on("load", function () {
    $("header.big-screen").load("html-header.html .big-screen >*", function(){
        $("header.small-screen").load("html-header.html .small-screen >*", function(){
            FunctionCodeHeader();
        });
    });
});

