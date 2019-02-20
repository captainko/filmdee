import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '@env/environment';
import { SearchResult, Movie } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private env = environment;
  movieStream: Subject<Movie[]>;
  constructor(private http: HttpClient) {
    this.movieStream = new Subject();
  }
  getMovies(query: string): Observable<Movie[]> {
    query.trim();
    query = query.split(' ').join('+')
    return this.http.get<SearchResult>(this.env.movieApiUrl + `s=${query}`)
      .pipe(
        map(res => {
          if (res.Response === "False") {
            // found not thing
            return [];
          }
          let search = res.Search.filter(x => x.Poster !== "N/A" ? true : false)
          return search;
        })
      );
  }
  getPoster(title: string): Observable<string> {
    return this.http.get<string>(this.env.posterApiUrl + '');
  }
}
