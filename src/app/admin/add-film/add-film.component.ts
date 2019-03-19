import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddFilmService } from '@services/add-film.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

export interface Film {
  id?: string;
  name?: string;
  quality?: string;
  launch?: {day: number, month: number, year: number};
}

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFilmComponent implements OnInit {

  // films: Film[];
  films: Film;
  id_next: any;
  model: NgbDateStruct;
  public model2: any;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(
    private addfilmService: AddFilmService,
    private calendar: NgbCalendar
  ) {
    
  }

  ngOnInit() {
    this.films = {};
    this.films.name = '';
    this.films.quality = '';
    this.films.launch = this.model;
    this.addfilmService.getUser().subscribe(films => {
      this.id_next = films.length + 1;
      console.log(this.id_next);
      // this.users = users;
    })
  }

  onSubmit() {
    this.films.launch = this.model;
    if (this.films.name != '' && this.films.quality != '') {
      this.addfilmService.addFilm(this.films, this.id_next);
    }
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
