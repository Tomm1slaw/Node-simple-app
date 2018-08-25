'use strict';

function converter(uptime){
	var min = Math.floor(uptime/60);
	var sec = Math.floor(uptime%60);
	var hour = Math.floor(min/60);
	var minLeft = (min%60);
	var time;

	if (min < 60) {
    time =  min + 'min. ' + sec + 'sek.';
    } else {
    time =  hour + 'godz. ' + minLeft + 'min. ' + sec + 'sek.';
    }
    return time;
}

converter(3700);

exports.convert = converter;