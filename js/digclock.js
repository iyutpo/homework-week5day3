function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone = d.toLocaleTimeString('en-us', {timeZoneName: 'short'}).split(' ')[2];

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone[0] + timeZone[2];
    document.getElementById('clock').innerText = time;
    // Run time data function every second
    setInterval(currentTime, 1000);
}
currentTime();