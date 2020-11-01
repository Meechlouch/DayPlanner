$(document).ready(function() {

let body = document.body;

//Current Day
let currentHeaderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentHeaderDate);
 
//use JQuery add listener to save button that listen for a click event
$(".saveBtn").on("click", function(event){
    event.preventDefault();

    let plan = $(this).siblings()[1].value;
    let planTime = $(this).parent().attr("data-hour");
    //let planTime = $(this).siblings(".hour").text();

    localStorage.setItem(planTime, JSON.stringify(plan));
    
});    

    let timeBlocks = $(".time-block");
    let date = new Date();
    let hour = date.getHours();
    
    for (i = 0; i < timeBlocks.length; i++) {

        let dataHour = parseInt(timeBlocks[i].getAttribute("data-hour"));
        
        if(hour < dataHour) {
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
    
        let plan9 = JSON.parse(localStorage.getItem("9"));
        $("#userPlan9AM").text(plan9);

        let plan10 = JSON.parse(localStorage.getItem("10"));
        $("#userPlan10AM").text(plan10);

        let plan11 = JSON.parse(localStorage.getItem("11"));
        $("#userPlan11AM").text(plan11);

        let plan12 = JSON.parse(localStorage.getItem("12"));
        $("#userPlan12AM").text(plan12);

        let plan1 = JSON.parse(localStorage.getItem("1"));
        $("#userPlan1AM").text(plan1);

        let plan2 = JSON.parse(localStorage.getItem("2"));
        $("#userPlan2AM").text(plan2);

        let plan3 = JSON.parse(localStorage.getItem("3"));
        $("#userPlan3AM").text(plan3);

        let plan4 = JSON.parse(localStorage.getItem("4"));
        $("#userPlan4AM").text(plan4);

        let plan5 = JSON.parse(localStorage.getItem("5"));
        $("#userPlan5AM").text(plan5);
        //let planTimefromLocal = localStorage.getItem("planTime");
       
        //planFromStorage.text("<textarea>");
    

});


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






































