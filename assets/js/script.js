// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated
var now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(now);
setInterval(function() {
  now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').text(now);
}, 1000);
// this code block creates 9 rows for 9 working hours
for (var i = 0; i < 9; i++) {
  var workHour = $('<div></div>');
  $(workHour).addClass('row time-block');
  $('#schedule').append(workHour);
  var workHourTime = $('<div></div>');
  $(workHourTime).addClass('col-1 hour').text(i+9);
  $(workHour).append(workHourTime);
  var workHourTask = $('<textarea></textarea>');
  $(workHourTask).addClass('col-10 description');
  $(workHour).append(workHourTask);
  var workHourSave = $('<button></button>');
  $(workHourSave).addClass('col-1 saveBtn').text("Save");
  $(workHour).append(workHourSave);
};