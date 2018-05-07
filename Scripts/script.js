
var counter;

// Ex: StartTimer(5, 'm') for Five Minutes
// Ex: StartTimer(5, 'h') for Five Hours
function StartTimer(timeDistance, timeMeasurement) {

    // Set the date we're counting down to
    var countDownDate = moment().add(5, 'm').toDate();

    counter = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#timer").text(minutes + ":" + seconds);

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            //document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function StopTimer() {
    clearInterval(counter);
    $("#timer").text("5:00");
}


