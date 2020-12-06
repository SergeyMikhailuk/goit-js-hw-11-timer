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

  start() {
    setInterval(() => {
      const time = this.targetDate.getTime() - Date.now();
      this.updateClockface(time);
    }, 1000);
  }

  updateClockface(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    daysRef.textContent = String(days).padStart(2, '0');
    hoursRef.textContent = String(hours).padStart(2, '0');
    minsRef.textContent = String(mins).padStart(2, '0');
    secsRef.textContent = String(secs).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 18, 2021'),
});

timer.start();
