
var counter;

// NOTE: Does not support days at this time
// Ex: StartTimer(5, 'm', 'timer') for Five Minutes
// Ex: StartTimer(5, 'h', 'timer') for Five Hours
function StartCountdownTimer(timeDistance, timeMeasurement, timerCallback) {

    // Add timeDistance in specified measurement to current time
    var countDownDate = moment().add(timeDistance, timeMeasurement).toDate();
    var timeRemaining;

    counter = setInterval(function () {

        // Get Current Time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        let duration = moment.duration(distance * 1000, "milliseconds");

        let hours = duration.hours();
        let minutes = duration.minutes();
        let seconds = duration.seconds();

        if (minutes < 10 && hours && hours > 0) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // If the count down is finished clear the counter interval.
        if (distance < 0) {
            clearInterval(counter);
        }
        else {
            timerCallback(hours, minutes, seconds);
        }
    }, 1000);
}

function StartCountdownTimerWithElement(startTime, timerCallback, element) {

    // Add timeDistance in specified measurement to current time
    var countDownDate = moment(startTime).add(5, 'm').toDate();

    console.log(countDownDate);

    var timeRemaining;

    counter = setInterval(function () {

        // Get Current Time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        let duration = moment.duration(distance * 1000, "milliseconds");

        let hours = duration.hours();
        let minutes = duration.minutes();
        let seconds = duration.seconds();

        if (minutes < 10 && hours && hours > 0) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // If the count down is finished clear the counter interval.
        if (distance < 0) {
            clearInterval(counter);
        }
        else {
            timerCallback(hours, minutes, seconds);
        }
    }, 1000);
}

function StopCountdownTimer() {
    clearInterval(counter);
}


