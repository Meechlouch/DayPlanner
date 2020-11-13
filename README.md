# DayPlanner
### Deployed link: https://meechlouch.github.io/DayPlanner/
### Gallery

#### Desktop:
![Desktop View](img/Screenshot%20(10).png)

#### Mobile:
![Mobile View](img/Screenshot%20(26).png)

## Project Description

This is an interactive work day planner that allow user to input daily task throughout a 9AM -5PM work day.
The application works by taking the users input and storing it into local storage a under the key value of the hourly time-block.
Future events are Green, Present events are Red, and Past events are Gray. With API calls from MomentJS, we get current time and date with every page load.
The time is compared to the time blocks where user placed event, once time is same as time block hour than event color is changed indicating to user that their event is scheduled.

# Challenges, Improvement Opportunities

This project was pretty straight forward, there were minor difficulty trying to get the colors to change dynamically based on the hour and was accomplished with conditional statements. Going forward, it would be ideal to get an alert when scheduled event time is current, also a notifications can be generated when scheduled events are near.

## Tech and Features Used

* Bootstrap
* Javascript
* JQuery
* MomentJS
* CSS
