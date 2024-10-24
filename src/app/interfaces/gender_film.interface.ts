export interface GenderFilm {
  page:          number;
  results:       GenderFilm[];
  total_pages:   number;
  total_results: number;
}

export interface GenderFilm {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguage {
  CN = "cn",
  En = "en",
  Sv = "sv",
}
