$(document).ready(function () {
    $(".gg").click(function () {
        $(".gg").removeClass("bar");
        $(".menu").addClass("on");
        $(".contact-box").addClass("on");
    });

    $(".active").click(function () {
        $(".gg").addClass("bar");
        $(".menu").removeClass("on");
        $(".contact-box").removeClass("on");
    });
});