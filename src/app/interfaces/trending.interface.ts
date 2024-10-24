export interface TrendingFilm {
  page:          number;
  results:       TrendingResult[];
  total_pages:   number;
  total_results: number;
}

export interface TrendingResult {
  backdrop_path:     string;
  id:                number;
  title:             string;
  original_title:    string;
  overview:          string;
  poster_path:       string;
  media_type:        MediaType;
  adult:             boolean;
  original_language: OriginalLanguage;
  genre_ids:         number[];
  popularity:        number;
  release_date:      Date;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum MediaType {
  Movie = "movie",
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  ID = "id",
  Ko = "ko",
}
