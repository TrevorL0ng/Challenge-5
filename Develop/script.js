// Variable declaration 
var currentTime = moment();
var hourBlocks;
var thisHour;
var eventText = $("eventtext");
var eventBlock = $(".col-8");
$.each(eventText, function () {
    this.value = "";
});

// Main function to determine if the time is then, now, or later. Offset by number of IDs

function schedulerTimeNow() {
    eventBlock.removeClass("then now later");
    $.each(eventBlock, function (timeBlockSet) {
        if (timeBlockSet < (currentTime.hour() - 9)) {
            $(this).addClass("then");
            }
        else if (timeBlockSet == (currentTime.hour() - 9)) {
            $(this).addClass("now");
            }
        else {
            $(this).addClass("later");
            }
    });
};
thisHour = currentTime.hour();
