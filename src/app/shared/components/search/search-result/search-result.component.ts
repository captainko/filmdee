import { Component, OnInit } from '@angular/core';
// import { SearchService } from '@services/search/search.service';
import { BoxCard } from '@shared/components/cards/box-card/box-card';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
// import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GetSlideListService } from '@services/get-slide-list/get-slide-list.service';
import { SearchService } from '@services/search/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  boxCards: BoxCard[];
  noResult: boolean = false;
  listFilms: BoxCard[];
  private logObj(name) {
    return {
      next: x => console.log(`${name} next:`, x),
      error: err => console.log(`${name} error:`, err),
      completed: () => console.log(`${name} completed`)
    }
  }

  constructor(
    // private searchService: SearchService,
    private  activated: ActivatedRoute,
    private searchService: SearchService
  ) {
  }

  ngOnInit() {

    this.searchService.getLists().subscribe(lists => {
      this.listFilms = lists;
    })

    this.activated.queryParams.subscribe((params)=> {
      if(params["q"]) {
        this.getMovies(params["q"])
          .subscribe((data: BoxCard[]) => {
            if(data.length == 0) {
              this.noResult = true;
            } else {
              this.noResult = false;
              // this.searchService.movieStream.next(data);
              this.boxCards = data;
            }
          })
      }
    })


  }


  getMovies(query: string): Observable<BoxCard[]> {
    query.trim();
    // query = query.split(' ').join('+');
    var temp = of(this.listFilms.filter((x: BoxCard) => {
      return x.name.toLowerCase().includes(query.toLowerCase())
    })
    );
    return temp;
    // return this.http.get<SearchResult>(this.env.movieApiUrl + `s=${query}`)
    //   .pipe(
    //     map(res => {
    //       if (res.Response === "False") {
    //         // found not thing
    //         return [];
    //       }
    //       let search = res.Search.filter(x => x.Poster !== "N/A" ? true : false)
    //       return search;
    //     })
    //   );
  }

}
