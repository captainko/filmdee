
export interface SearchResult {
  Search:       Movie[];
  totalResults: string;
  Response:     string;
}

export interface Movie {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   string;
  Poster: string;
}
