var timerValue, timerRotate;

function rotate(stepTime) {
  var style = getComputedStyle(document.body);

  var timerRotate = setInterval(function() {
      var rotation = style.getPropertyValue('--rotation');
        document.documentElement.style.setProperty('--rotation', rotation === " 10deg" ? " 360deg" : " 0deg")
    }, stepTime);
}

function animateValue(cssVariable, id, units, start, end, duration) {
    var obj = document.getElementById(id);
    var objCircle = document.getElementById(`${id}Circle`);
    console.log('obj', obj);
    console.log('objCircle', objCircle);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timerValue = setInterval(function() {
        current += increment;
        document.documentElement.style.setProperty(cssVariable, `${current}${units}`)
        obj.innerHTML = `${current}%`;
        objCircle.innerHTML = `${current}%`;
        if (current >= end) {
            console.log('eeend');
            clearInterval(timerValue);
            clearInterval(timerRotate);
        }
    }, stepTime);
}

function start() {
    console.log('hey');
    rotate(2000);
    animateValue('--percentageBar', 'percent', '%', 10, 100, 10000);
    animateValue('--percentageCircle', 'percent', 'px', 10, 100, 10000);
}

document.getElementById("buttonStart").onclick = start;