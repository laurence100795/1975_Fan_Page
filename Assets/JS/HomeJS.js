$(document).ready(function () {
    $(function () {
        $(window).resize(function () {
            if ($("#").width() <= 768) {
                $('#')
                    .removeClass('container-fluid');
                $('#')
                    .addClass('container');
            } else {
                $('#')
                    .removeClass('container')
                $('#')
                    .addClass('container-fluid');
            }
        });
    });

});