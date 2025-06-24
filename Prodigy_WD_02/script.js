let time = 0;
let interval;
let running = false;
const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function format(ms) {
  const hours = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const centis = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}:${centis}`;
}

function updateDisplay() {
  display.textContent = format(time);
}

startStopBtn.onclick = () => {
  if (!running) {
    interval = setInterval(() => {
      time += 10;
      updateDisplay();
    }, 10);
    startStopBtn.textContent = "Pause";
    lapBtn.disabled = false;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = "Start";
    lapBtn.disabled = true;
  }
  running = !running;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  time = 0;
  running = false;
  updateDisplay();
  startStopBtn.textContent = "Start";
  lapBtn.disabled = true;
  lapsList.innerHTML = "";
};

lapBtn.onclick = () => {
  const li = document.createElement("li");
  li.textContent = format(time);
  lapsList.appendChild(li);
};

updateDisplay();
