$(function() {
    $("code").hover(function() {
        $(this)
        .css("color", "#121212")
        .css("background-color", "#f1f1f1")
    }, function() {
        $(this)
        .css("color", "#f1f1f1")
        .css("background-color", "#121212")
    }
    )
});