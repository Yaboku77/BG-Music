import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_SUCESS,
  GET_SINGLE_ALBUM_BEGIN,
  GET_SINGLE_ALBUM_SUCESS,
  GET_SINGLE_ALBUM_ERROR,
  ALERT_SHOW,
  GET_SINGLE_PLAYLIST_BEGIN,
  GET_SINGLE_PLAYLIST_SUCESS,
  GET_ARTIST_DETAILS_BEGIN,
  GET_ARTIST_DETAILS_SUCESS,
  GET_ARTIST_DETAILS_ERROR,
  GET_ARTIST_SONGS_BEGIN,
  GET_ARTIST_SONGS_SUCESS,
  GET_ARTIST_ALBUMS_BEGIN,
  GET_ARTIST_ALBUMS_SUCESS,
} from "../Actions";

const Music_reducer = (state, action) => {
  if (action.type === GET_HOME_DATA_BEGIN) {
    return { ...state, homeData_loading: true };
  }
  if (action.type === GET_HOME_DATA_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      albums: data.albums,
      playlists: data.playlists,
      charts: data.charts,
      trendingAlbums: data.trending.albums,
      trendingSongs: data.trending.songs,
      homeData_loading: false,
    };
  }

  if (action.type === GET_SINGLE_ALBUM_BEGIN) {
    return { ...state, single_album_loading: true };
  }
  if (action.type === GET_SINGLE_ALBUM_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      currentAlbum: data,
      single_album_loading: false,
    };
  }
  
  if (action.type === GET_SINGLE_ALBUM_ERROR) {
    return {
      ...state,
      single_album_loading: false,
    };
  }

  if (action.type === GET_SINGLE_PLAYLIST_BEGIN) {
    return { ...state, single_album_loading: true };
  }

  if (action.type === GET_SINGLE_PLAYLIST_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      currentPlaylists: data,
      single_album_loading: false,
    };
  }

  if (action.type === GET_ARTIST_DETAILS_BEGIN) {
    return { ...state, single_artist_loading: true };
  }

  if (action.type === GET_ARTIST_DETAILS_SUCESS) {
    let data = action.payload;
    return {
      ...state,
      single_artist_details: data,
      single_artist_loading: false,
    };
  }

  if (action.type === GET_ARTIST_SONGS_BEGIN) {
    return {
      ...state,
      single_artist_songs_loading: true,
    };
  }

  if (action.type === GET_ARTIST_SONGS_SUCESS) {
    let data = action.payload;
    return {
      ...state,
      single_artist_songs: data,
      single_artist_songs_loading: false,
    };
  }

  if (action.type === GET_ARTIST_ALBUMS_BEGIN) {
    return {
      ...state,
      single_artist_albums_loading: true,
    };
  }

  if (action.type === GET_ARTIST_ALBUMS_SUCESS) {
    let data = action.payload;
    return {
      ...state,
      single_artist_albums: data,
      single_artist_albums_loading: false,
    };
  }

  if (action.type === GET_ARTIST_DETAILS_ERROR) {
    return { ...state };
  }

  if (action.type === ALERT_SHOW) {
    return { ...state, alert_show: false };
  }

  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Music_reducer;
