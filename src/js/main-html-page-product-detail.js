$(window).on("load", function () {
    //load header
    $("header.big-screen").load("html-header.html .big-screen >*", function(){
        $("header.small-screen").load("html-header.html .small-screen >*", function(){
            //load footer
            $("footer").load("html-footer.html footer >*", function(){
                FunctionCodeHeader();
                FunctionCodePageProductDetail();
                FunctionCodeFooter();
            });
        });
    });
});