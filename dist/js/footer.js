$(window).on("load", function () {
    $("footer").load("footer.html footer >*", function(){
        CodeFooter();
    });
    
});
function CodeFooter(){
    //dấu + ở footer khi màn hình nhỏ
    $("footer .email-signup .container-self h3").click(function (e) { 
        e.preventDefault();
        if($($(this)).hasClass("content-closed")){
            $($(this)).removeClass("content-closed");
        }
        else{
            $($(this)).addClass("content-closed");
        }
    });
}