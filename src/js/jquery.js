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
    );

    $("#pkmnBtn").click(() => {
        $.get("https://pokeapi.co/api/v2/pokemon/pikachu", function(data, status){
            $("#pkmnBtn").html(data.name);
            console.log(data.name)
        });
    });
});