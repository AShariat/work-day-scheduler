// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated
var m = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(m);
setInterval(function() {
  var m = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').text(m);
}, 1000);