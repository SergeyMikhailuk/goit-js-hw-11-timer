import './styles.css';
const daysRef = document.querySelector('#timer-1 span[data-value="days"]');
const hoursRef = document.querySelector('#timer-1 span[data-value="hours"]');
const minsRef = document.querySelector('#timer-1 span[data-value="mins"]');
const secsRef = document.querySelector('#timer-1 span[data-value="secs"]');

class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 18, 2021'),
});
const timerId = setInterval(makeTimer, 1000);

function makeTimer() {
  const time = timer.targetDate.getTime() - Date.now();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  daysRef.textContent = String(days).padStart(2, '0');
  hoursRef.textContent = String(hours).padStart(2, '0');
  minsRef.textContent = String(mins).padStart(2, '0');
  secsRef.textContent = String(secs).padStart(2, '0');
}
makeTimer();
