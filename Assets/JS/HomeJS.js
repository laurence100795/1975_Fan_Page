$(document).ready(function () {
    $(function () {
        $(window).resize(function () {
            if($("#HomeWidth").width() <= 1182) {
                $('#AddContainer')
                    .addClass('container');
            } else {
                $('#AddContainer')
                    .removeClass('container')
            }
        });
    });

});