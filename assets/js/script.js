// display the date and time using moment
var dateTime = moment().format("MMM Do YYYY");

console.log(dateTime);
// make sure that it updates depending on the day
$("#currentDay").append(dateTime);

var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17",]
// Each block of scheduler is color coded by time of day
function updateTime() {
    var currentTime = moment().format("H");
    for (var i = 0; i < time.length; i++) {

        if (parseInt(time[i] > currentTime)) {
            $("#" + time[i].attr("style", "background-color: darkred"));
        }
        else if (parseInt(time[i] < currentTime)) {
            $("#" + time[i].attr("style", "background-color: red"));
        }
        else if (parseInt(time[i] == currentTime)) {
            $("#" + time[i].attr("style", "background-color: salmon"));
        }
    }
}
// Each block of scheduler is color coded by time of day
// When you save the event, then the text is saved to local storage
// When refreshing the page, time saved events are still there

