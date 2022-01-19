// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated.
var now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(now);
setInterval(function() {
  now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').text(now);
}, 1000);
// this code block formats the current time the way I can use it as a number to then compare it with the work hour. it also refreshes the time every second so the timeNumber stays updated.
var timeNumber = moment().format('HH');
setInterval(function() {
  var timeNumber = moment().format('HH');
}, 1000);
// this code block is the main part of our code and we loop through it 9 times because we have 9 working hours.
for (var i = 0; i < 9; i++) {
  // here we add 9 to our index because our workTime starts at 9am.
  var workTime = i+9;
  // here we create 9 rows for 9 working hours.
  var workHour = $('<div></div>');
  $(workHour).addClass('row time-block');
  $(workHour).attr("id", "time-block-"+workTime);
  $('#schedule').append(workHour);
  var workHourTime = $('<div></div>');
  // here we decide if the time that is showing is am or pm. also we change it from 24h time format into 12h time format.
  if (workTime > 12) {
    var workTimeAmPm = workTime-12 + " pm";
  } else if (workTime == 12) {
    workTimeAmPm = workTime + " pm";
  } else {
    workTimeAmPm = workTime + " am";
  }
  $(workHourTime).addClass('col-1 hour').text(workTimeAmPm);
  $(workHourTime).attr("id", "hour-"+workTime);
  $(workHour).append(workHourTime);
  var workHourTask = $('<input>');
  $(workHourTask).addClass('col-10 description');
  $(workHourTask).attr("id", "task-"+workTime);
  // here we check to see if there is any task saved inside the local storage for that specific time block.
  var localTask = localStorage.getItem(workTime);
  $(workHourTask).attr("value", localTask);
  // this code block compares the current time to the working hours and color code them accordingly.
  if (workTime == timeNumber) {
    $(workHourTask).addClass('present');
  } else if (workTime < timeNumber) {
    $(workHourTask).addClass('past');
  } else {
    $(workHourTask).addClass('future');
  }
  $(workHour).append(workHourTask);
  var workHourSave = $('<button></button>');
  $(workHourSave).addClass('col-1 saveBtn').text("Save");
  $(workHourSave).attr("id", "save-"+workTime);
  $(workHour).append(workHourSave);
};
// this code block saves user input into local storage for each time block.
$('#save-9').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-9').value;
  localStorage.setItem("9", task);
});
$('#save-10').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-10').value;
  localStorage.setItem("10", task);
});
$('#save-11').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-11').value;
  localStorage.setItem("11", task);
});
$('#save-12').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-12').value;
  localStorage.setItem("12", task);
});
$('#save-13').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-13').value;
  localStorage.setItem("13", task);
});
$('#save-14').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-14').value;
  localStorage.setItem("14", task);
});
$('#save-15').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-15').value;
  localStorage.setItem("15", task);
});
$('#save-16').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-16').value;
  localStorage.setItem("16", task);
});
$('#save-17').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('#task-17').value;
  localStorage.setItem("17", task);
});
// this code block clears the local storage and refreshes the page using a "Delete All" button.
$('#delete-all').click(function(e) {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});