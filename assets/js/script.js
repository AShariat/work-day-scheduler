// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated
var now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(now);
setInterval(function() {
  now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').text(now);
}, 1000);
// this code block formats the current time the way I can use it as a number to then compare it with the working hours
var timeNumber = moment().format('HH');
setInterval(function() {
  var timeNumber = moment().format('HH');
  console.log(timeNumber);
}, 1000);
// this code block creates 9 rows for 9 working hours
for (var i = 0; i < 9; i++) {
  var workTime = i+9;
  var workHour = $('<div></div>');
  $(workHour).addClass('row time-block');
  $('#schedule').append(workHour);
  var workHourTime = $('<div></div>');
  $(workHourTime).addClass('col-1 hour').text(workTime + " am/pm");
  $(workHour).append(workHourTime);
  var workHourTask = $('<textarea></textarea>');
  $(workHourTask).addClass('col-10 description');
  // this code block compares the current time to the working hours and color code them accordingly
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
  $(workHour).append(workHourSave);
};