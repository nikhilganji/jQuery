$(function() {
    var content ="PowerRangers";
    $(".panel-button").on("click", function () {
        var panelId = $(this).attr('data-panelid');
        $('#'+panelId).slideToggle();
        $('#'+panelId+ '.panel-body').html(content);
    });
});

