export function calculatePaceString(minutes, seconds) {
  const minutesTrunc = Math.trunc(seconds / 60);
  let secondsRemainder = Math.round((seconds % 60) * 100) / 100;

  if( secondsRemainder < 10 ) {
    secondsRemainder = `0${secondsRemainder}`
  }

  return `${minutesTrunc}:${secondsRemainder}`
}