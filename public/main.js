

$(document).ready(function () {
    $("#calendar").MEC({
        calendar_link: "example.com/myCalendar",
        events: db_events
    });

    $("#show_hide").click(function () {
        $("#eligibility").toggle()
        $("#rott").toggleClass('rotated')

    });


});

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
var db_events = [{
    title: "Board members meeting",
    date: new Date().getTime(),
    link: "events.com/ev2"
}];

$(function () {
    $('#optionselector').change(function () {
        $('.option').hide();
        $('#' + $(this).val()).show();
    });
});

