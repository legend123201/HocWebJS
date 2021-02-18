$(document).ready(function () {
    $( ".big-screen" ).load( "header.html .big-screen >*" );

    $("h1").click(function (e) { 
        e.preventDefault();
        //$("h1").toggleClass("show");
        $("h1 .dropdown").slideToggle();
    });
});