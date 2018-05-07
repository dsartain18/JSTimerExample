
var counter;

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

        // Calculate minutes and seconds from current time to countDownDate
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerCallback(hours, minutes, seconds);

        // If the count down is finished clear the counter interval.
        if (distance < 0) {
            clearInterval(counter);
        }
    }, 1000);
}

function StopCountdownTimer() {
    clearInterval(counter);    
}


