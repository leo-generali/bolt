export function calculatePaceString(minutes, seconds) {
  const minutesTrunc = Math.trunc(seconds / 60);
  const secondsTrunc = Math.round((seconds % 60) * 100) / 100;
  const secondsRemainder = secondsTrunc > 10 ? secondsTrunc : `0${secondsTrunc}`;
  return `${minutesTrunc}:${secondsRemainder}`;
}

export function paceStringToSeconds(string) {
  const stringArr = string.split(':');
  const minutes = parseInt(stringArr[0], 10);
  const seconds = parseInt(stringArr[1], 10);
  const totalSecondsPace = (minutes * 60) + (seconds);
  return totalSecondsPace;
}

export function calculateTotalSeconds(hours, minutes, seconds) {
  const hoursToSeconds = hours * 3600;
  const minutesToSeconds = minutes * 60;
  const totalSeconds = hoursToSeconds + minutesToSeconds + seconds;

  return totalSeconds;
}