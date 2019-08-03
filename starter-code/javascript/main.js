var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  let minutes = printMinutes(chronometer);
  let seconds = printSeconds(chronometer);
  console.log("concha " + minutes, "mierda " + seconds);
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMinutes(chrono) {
  return chrono.twoDigitsNumber(chrono.getMinutes());
}

function printSeconds(chrono) {
  return chrono.twoDigitsNumber(chrono.getSeconds());
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  let clase = btnLeft.getAttribute("class");
  console.log(chronometer.currentTime);

  if (clase === "btn start") {
    chronometer.startClick();
    printTime();
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerText = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerText = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  let clase = btnRight.getAttribute("class");

  if (clase === "btn reset") {
    chronometer.resetClick();
    if (btnLeft.innerText === "START") {
      btnRight.setAttribute("class", "btn reset");
      btnRight.innerText = "RESET";
    }
  } else {
    if (btnLeft.innerText === "STOP") {
      btnRight.setAttribute("class", "btn split");
      btnRight.innerText = "SPLIT";
    }
  }
});
