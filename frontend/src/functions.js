import tracks_short from './sample_data/top_tracks_short.json';
import tracks_medium from './sample_data/top_tracks_medium.json';
import artists_short from './sample_data/top_artists_short.json';

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

export const getTracks = (timeFrame) => {
  let tracks;
  switch(timeFrame) {
    case "short":
      tracks = tracks_short;
      break;
    case "medium":
      tracks = tracks_medium;
      break;
    default:
      break;
  }

  if (!tracks) return [];
  
  const items = tracks.items.map((item) =>(
    {
      track_name: item['name'],
      artist: item['artists'][0]['name'],
      duration_ms: item['duration_ms'],
      album_name: item['album']['name'],
      album_release_year: item['album']['release_date'].slice(0,4),
      album_photo_url: item['album']['images'][0]['name'],
    }
  ));
  return items;
}

export const getArtists = (timeFrame) => {
  const items = artists_short.items.map((item) =>(
    {
      artist: item['name'],
      artist_photo_url: item['images'][0]['url'],
      top_tracks: []
    }

    // get list of artist's tracks that showed up in top tracks
  ));
  return items;
}
