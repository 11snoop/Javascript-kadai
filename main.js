$(document).ready(function() {
    // スタート
    $("#start").click(function() {
        $("#timer").html("00:00:00:0");
        timer = setInterval("countUp()", 100);
        $(this).attr("disabled", "disabled");
        $("#stop").removeAttr("disabled");
    });
    // ストップ
    $("#stop").click(function() {
        clearInterval(timer);
        $(this).attr("disabled", "disabled");
        $("#start").removeAttr("disabled");
        $("#reset").removeAttr("disabled");
    });
    // リセット
    $("#reset").click(function() {
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
        $("#timer").html("00:00:00:0");
        clearInterval(timer);
        $(this).attr("disabled", "disabled");
        $("#stop").attr("disabled");
        $("#start").removeAttr("disabled");
    });
});

msec = 0;
sec  = 0;
min  = 0;
hour = 0;

function countUp() {
    msec += 1;
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
    if (min > 59) {
        min = 0;
        hour += 1;
    }
    msecNumber = msec;
    if (sec < 10) {
        secNumber = '0' + sec.toString();
    } else {
        secNumber = sec;
    }
    if (min < 10) {
        minNumber = '0' + min.toString();
    } else {
        minNumber = min;
    }
    if (hour < 10) {
        hourNumber = '0' + hour.toString();
    } else {
        hourNumber = hour;
    }
    $("#timer").html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}