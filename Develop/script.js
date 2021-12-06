// Variable declaration 
var currentTime = moment();
var hourBlocks;
var thisHour;
var eventText = $("eventtext");
var eventBlock = $(".col-8");
$.each(eventText, function () {
    this.value = "";
});

// Displaying the current day 

$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

// Display event list if there is one before calling a new one 

if (localStorage.getItem("savedEvents")) {
    hourBlocks = JSON.parse(localStorage.getItem('savedEvents'));
}
else {
    hourBlocks = [];
};


// Main function to determine if the time is then, now, or later. Offset by number of IDs

function schedulerTimeNow() {
    eventBlock.removeClass("then now later");
    $.each(eventBlock, function (timeBlockSet) {
        if (timeBlockSet < (currentTime.hour() - 9)) {
            $(this).addClass("past");
            }
        else if (timeBlockSet == (currentTime.hour() - 9)) {
            $(this).addClass("present");
            }
        else {
            $(this).addClass("future");
            }
    });
};
thisHour = currentTime.hour();

// Function to save to local storage 

function saveToStore() {
    event.preventDefault();
    localStorage.setItem("savedEvents", JSON.stringify(hourBlocks));
};

function displaySavedEvents() {
    $.each(hourBlocks, function (i) {
        if(hourBlocks[i]) {
            eventText[i].value = hourBlocks[i].event
        }
    });
}



schedulerTimeNow();
displaySavedEvents();
$("button").click(saveToStore);