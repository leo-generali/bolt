export function calculatePaceString(minutes, seconds) {
  const minutesTrunc = Math.trunc(seconds / 60);
  const secondsTrunc = Math.round((seconds % 60) * 100) / 100;
  const secondsRemainder = secondsTrunc > 10 ? secondsTrunc : `0${secondsTrunc}`;
  return `${minutesTrunc}:${secondsRemainder}`;
}