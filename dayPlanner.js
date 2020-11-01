$(document).ready(function() {

    /* Psuecode
    1. get time from momentjs
    2. user is presented with planner with hourly time, text area, and a save button
    3. On the click of the save button. Target text area for user value
    4. Compare time of user text to current time
    5. If user text time is less than current time than add CSS past
    6. If user time is greater than current time add CSS future
    7. If user time is equal to time now than add CSS present
    8. set user input time and  user input to locale storage
    9. target user input text
    10. getItem from local storage
    11. display local storage to user text area
    */

    //Current Day and time from Momentjs
    let timeNDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(timeNDate);
 
    //Event Listener listens for a click of the save button
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        //variable created to store user data from targeted sibling element, (this); added to target any button press
        let plan = $(this).siblings()[1].value;
        //variable created to store the hour that user data is scheduled, (this); targets parent element for any button press and stores the targeted attribute value of "data-hour"
        let planTime = $(this).parent().attr("data-hour");
        //set both variables into local storage setting the data-hour variable as a key for the value of variable user text. JSON.stringify converts value to a string
        localStorage.setItem(planTime, JSON.stringify(plan));
    });   
    
    //JQuery targets all class time-blocks
    let timeBlocks = $(".time-block");
    //variable created to store current time
    let date = new Date();
    //variable created to store hour of current time
    let hour = date.getHours();
    //for loop created to iterate the time block classes
    for (i = 0; i < timeBlocks.length; i++) {
        //variable created to store the number of the targeted attribute of each time block iteration, parseInt converts "str-num" into a digit
        let dataHour = parseInt(timeBlocks[i].getAttribute("data-hour"));
        //if statements created to compare the current hour with targeted attribute digit       
        if(hour < dataHour) {
            //CSS is then applied based on the comparison both variable digit
            $(timeBlocks[i]).addClass("future");
            $(timeBlocks[i]).removeClass("past");
            $(timeBlocks[i]).removeClass("present");
        } else if(hour > dataHour) {
            $(timeBlocks[i]).addClass("past");
            $(timeBlocks[i]).removeClass("future");
            $(timeBlocks[i]).removeClass("present");
        } else if(hour === dataHour) {
            $(timeBlocks[i]).addClass("present");
            $(timeBlocks[i]).removeClass("future");
            $(timeBlocks[i]).removeClass("past");  
        } else if(hour > 16 && hour < 9) {
            $(timeBlocks[i]).addClass("future");
            $(timeBlocks[i]).removeClass("past");
            $(timeBlocks[i]).removeClass("present");
        }
    }
    //Variable created with the value of the key inside local storage. JSON.parse to revert the JSON.stringify
    let plan9 = JSON.parse(localStorage.getItem("9"));
    //JQuery targets HTML id's and display the text from local storage key value
    $("#userPlan9AM").text(plan9);

    let plan10 = JSON.parse(localStorage.getItem("10"));
    $("#userPlan10AM").text(plan10);

    let plan11 = JSON.parse(localStorage.getItem("11"));
    $("#userPlan11AM").text(plan11);

    let plan12 = JSON.parse(localStorage.getItem("12"));
    $("#userPlan12PM").text(plan12);

    let plan1 = JSON.parse(localStorage.getItem("13"));
    $("#userPlan1PM").text(plan1);

    let plan2 = JSON.parse(localStorage.getItem("14"));
    $("#userPlan2PM").text(plan2);

    let plan3 = JSON.parse(localStorage.getItem("15"));
    $("#userPlan3PM").text(plan3);

    let plan4 = JSON.parse(localStorage.getItem("16"));
    $("#userPlan4PM").text(plan4);

    let plan5 = JSON.parse(localStorage.getItem("17"));
    $("#userPlan5PM").text(plan5);
});






































