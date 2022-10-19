const timePadStart = (time) => {
  return time.toString().padStart(2, '0');
};
export const countDonwTime = (timestamp, callback) => {
  const date = new Date();
  const times = timestamp - date.getTime();

  let days = parseInt(times / (1000 * 60 * 60 * 24));
  let hours = parseInt((times % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = parseInt((times % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((times % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);

  const interval = setInterval(() => {
    if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes = minutes - 1;
    }
    if (minutes === 0 && hours > 0) {
      minutes = 60;
      hours = hours - 1;
    }
    if (hours === 0 && days > 0) {
      hours = 24;
      days = days - 1;
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
    } else {
      seconds = seconds - 1;
    }

    callback({
      days: timePadStart(days),
      hours: timePadStart(hours),
      minutes: timePadStart(minutes),
      seconds: timePadStart(seconds),
    });
  }, 1000);

  callback({
    days: timePadStart(days),
    hours: timePadStart(hours),
    minutes: timePadStart(minutes),
    seconds: timePadStart(seconds),
  });
};
