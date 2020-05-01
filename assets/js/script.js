// ** Layout and concepts referenced from the following source https://github.com/cmelby/DayPlanner/blob/master/script.js **
// Display the date and time using moment.
// Create a variable to house the current date and year / possibly time.
var dateTime = moment().format("MMM Do YYYY");
console.log(dateTime);
// Update the currentDay using the dateTime variable.
$("#currentDay").append(dateTime);

// Create an array of times. Must use military time so that if else statements will work.
var timeEl = [9, 10, 11, 12, 13, 14, 15, 16, 17]
updateTime();
// Each block of scheduler is color coded by time of day
function updateTime() {
    // set variable for the current hour
    var currentTime = moment().format("H");
    // create for loop to loop through array 
    for (var i = 0; i < timeEl.length; i++) {
        console.log($("#" + timeEl[i]));
        // If statement that makes background color row green if the row time is greater than the current time.
        // parseInt turns current time from a string to an integer as to make it comparable
        if (timeEl[i] > parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: #98FB98");
        }
        // Else if statement that makes row background color red if the row time is less than the current time.
        else if (timeEl[i] < parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: IndianRed");
        }
        // Else if statement that makes row background color gray if the row time is equal to the current time.
        else if (timeEl[i] == parseInt(currentTime)) {
            $("#" + timeEl[i]).attr("style", "background-color: lightgray");
        }
    }
}
// When you save the event, then the text is saved to local storage
// Event listener for save buttons
$(".btn").on("click", function () {
    // make timEL equal to the parent id attribute of the button
    // use $(this) to reference event source $(".btn") and enables jquery methods to be used 
    var timeEl = $(this).parent().attr("id");
    // make textEl equal to the sibling input value of the button 
    var textEl = $(this).siblings("input").val().trim();
    // When refreshing the page, time saved events are still there
    // Store the time and text elements to local storage so that items remain when page refreshes
    localStorage.setItem(timeEl, textEl);
    console.log(timeEl, textEl);
});

// Take the child input value and set it to the parent element
$("#9AM").children("input").val(localStorage.getItem("9AM"));
$("#10AM").children("input").val(localStorage.getItem("10AM"));
$("#11AM").children("input").val(localStorage.getItem("11AM"));
$("#12PM").children("input").val(localStorage.getItem("12PM"));
$("#1PM").children("input").val(localStorage.getItem("1PM"));
$("#2PM").children("input").val(localStorage.getItem("2PM"));
$("#3PM").children("input").val(localStorage.getItem("3PM"));
$("#4PM").children("input").val(localStorage.getItem("4PM"));
$("#5PM").children("input").val(localStorage.getItem("5PM"));



