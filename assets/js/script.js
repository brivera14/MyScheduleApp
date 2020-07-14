// Display current date in the header of the app
var dateNow = moment().format("ddd, MMMM Do");
$("#currentDay").text(dateNow);

// create array to store the events
var events = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
eventTime();

function eventTime (){
    var currentTime = moment().format("H");
    for(var i = 0; i < events.length; i++) {
        if (parseInt(events[i]) > currentTime) {
            $("#" + events[i]).attr("class", "future col-10");
        } else if (parseInt(events[i]) < currentTime) {
            $("#" + events[i]).attr("class", "past");
        } else if (parseInt(events[i]) === currentTime) {
            $("#" + events[i]).attr("class", "present");
        }
    }
}

// add event listener to push the input value to save event in local storage
$(".rowBtn").on("click", function () {
   
    localStorage.setItem("nine-am", $("#nine-am").children("input").val().trim());
    localStorage.setItem("ten-am", $("#ten-am").children("input").val().trim());
    localStorage.setItem("eleven-am", $("#eleven-am").children("input").val().trim());
    localStorage.setItem("twelve-pm", $("#twelve-pm").children("input").val().trim());
    localStorage.setItem("one-pm", $("#one-pm").children("input").val().trim());
    localStorage.setItem("two-pm", $("#two-pm").children("input").val().trim());
    localStorage.setItem("three-pm", $("#three-pm").children("input").val().trim());
    localStorage.setItem("four-pm", $("#four-pm").children("input").val().trim());
    localStorage.setItem("five-pm", $("#five-pm").children("input").val().trim());
});

// get the schedule plans to each array
$("#nine-am").children("input").val(localStorage.getItem("nine-am"));
$("#ten-am").children("input").val(localStorage.getItem("ten-am"));
$("#eleven-am").children("input").val(localStorage.getItem("eleven-am"));
$("#twelve-pm").children("input").val(localStorage.getItem("twelve-pm"));
$("#one-pm").children("input").val(localStorage.getItem("one-pm"));
$("#two-pm").children("input").val(localStorage.getItem("two-pm"));
$("#three-pm").children("input").val(localStorage.getItem("three-pm"));
$("#four-pm").children("input").val(localStorage.getItem("four-pm"));
$("#five-pm").children("input").val(localStorage.getItem("five-pm"));
