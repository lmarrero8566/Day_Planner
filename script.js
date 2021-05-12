const currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").append(currentDay);

var datetime = null,
	date = null;

var update = function () {
	date = moment(new Date());
	datetime.html(date.format("MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
	datetime = $("#currentDay");
	update();
	setInterval(update, 1000);
});
