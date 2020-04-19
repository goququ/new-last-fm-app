export interface Artist {
  img: string;
  name: string;
  url: string;
  listeners: string;
}

export interface ArtistsState {
  artists: Artist[];
  artist: string;
  total: number;
  limit: number;
}
