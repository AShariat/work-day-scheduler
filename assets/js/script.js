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
}, 1000);
// this code block creates 9 rows for 9 working hours
for (var i = 0; i < 9; i++) {
  var workTime = i+9;
  var workHour = $('<div></div>');
  $(workHour).addClass('row time-block');
  $(workHour).addClass("time-block-"+workTime);
  $('#schedule').append(workHour);
  var workHourTime = $('<div></div>');
  if (workTime > 12) {
    var workTimeAmPm = workTime-12 + " pm";
  } else if (workTime == 12) {
    workTimeAmPm = workTime + " pm";
  } else {
    workTimeAmPm = workTime + " am";
  }
  $(workHourTime).addClass('col-1 hour').text(workTimeAmPm);
  $(workHourTime).addClass("hour-"+workTime);
  $(workHour).append(workHourTime);
  var workHourTask = $('<input>');
  $(workHourTask).addClass('col-10 description');
  $(workHourTask).addClass("task-"+workTime);
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
  $(workHourSave).addClass("save-"+workTime);
  $(workHour).append(workHourSave);
};

$('.save-9').click(function (e) { 
  e.preventDefault();
  var task = document.querySelector('.task-9').value;
  if (task == "") {
    console.log("Empty");
  } else {
    console.log(task);
  }  
});

$('#delete-all').click(function(e) {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});