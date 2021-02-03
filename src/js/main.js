//ko để bất cứ gì ngoài đây vì để ngoài đây thì nó chạy song song với load document html
$(document).ready(function () {
    //chỉ duy nhất ở đây trong đồ án mới có ready function, vì nếu những file kia ko dùng on('load', func()) thì nó chạy loạn xạ, cái này chưa load xong html mà mấy cái file kia đã chạy, thành ra mấy file kia ko tìm thấy html đâu để làm việc
    $("header.big-screen").load("header.html .big-screen >*");
    $("header.small-screen").load("header.html .small-screen >*");
    $("section.women-start").load("women-start.html section.women-start >*");
    $("section.women-products").load("women-products.html section.women-products >*");
    $("footer").load("footer.html footer >*");
});
