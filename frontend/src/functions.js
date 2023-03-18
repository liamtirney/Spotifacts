/*
* Converts the duration of the song to a more readable format.
* From milliseconds to "minutes:seconds"
*/
export const getDuration = (duration_ms) => {
  let duration, minutes, seconds;

  minutes = Math.floor(duration_ms / 60000);
  duration_ms -= minutes * 60000;
  seconds = Math.floor(duration_ms / 1000);
  seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

  duration = `${minutes} : ${seconds}`;
  return duration;
}

