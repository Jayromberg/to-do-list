export function timeToSeconds(time: string): number {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;

  return hoursToSeconds + minutesToSeconds + Number(seconds);
}

export function converterForStopwatch(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [firstNumberMinute, secondNumberMinute] = String(minutes).padStart(2, '0');
  const [firstNumberSecond, secondNumberSecond] = String(seconds).padStart(2, '0');

  return { firstNumberMinute, secondNumberMinute, firstNumberSecond, secondNumberSecond };
}