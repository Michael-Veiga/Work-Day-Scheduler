// display the date and time using moment
var dateTime = moment().format("MMM Do YYYY");
console.log(dateTime);
// make sure that it updates depending on the day
$("#currentDay").append(dateTime);

var timeEl = [9, 10, 11, 12, 13, 14, 15, 16, 17]
updateTime();
// Each block of scheduler is color coded by time of day
function updateTime() {
    var currentTime = moment().format("H");
    for (var i = 0; i < timeEl.length; i++) {
        console.log($("#" + timeEl[i]));
        if (timeEl[i] > parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: #98FB98");
        }
        else if (timeEl[i] < parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: IndianRed");
        }
        else if (timeEl[i] == parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: lightgray");
        }
    }
}
// When you save the event, then the text is saved to local storage
$(".btn").on("click", function () {
    var timeEl = $(this).parent().attr("id");
    var textEl = $(this).siblings("input").val().trim();
    // When refreshing the page, time saved events are still there
    localStorage.setItem(timeEl, textEl);
    console.log(timeEl, textEl);
});

$("#9AM").children("input").val(localStorage.getItem("9AM"));
$("#10AM").children("input").val(localStorage.getItem("10AM"));
$("#11AM").children("input").val(localStorage.getItem("11AM"));
$("#12PM").children("input").val(localStorage.getItem("12PM"));
$("#1PM").children("input").val(localStorage.getItem("1PM"));
$("#2PM").children("input").val(localStorage.getItem("2PM"));
$("#3PM").children("input").val(localStorage.getItem("3PM"));
$("#4PM").children("input").val(localStorage.getItem("4PM"));
$("#5PM").children("input").val(localStorage.getItem("5PM"));



