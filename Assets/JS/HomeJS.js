$(document).ready(function () {
    $(function () {
        $(window).resize(function () {
            if($("#").width() <= 767) {
                $('#ArrowUp').addClass('fa-arrow-up');
                $('#ArrowUp').removeClass('fa-arrow-left');
            } else {
                $('#ArrowUp').removeClass('fa-arrow-up');
                $('#ArrowUp').addClass('fa-arrow-left');
            }
        });
    });

});