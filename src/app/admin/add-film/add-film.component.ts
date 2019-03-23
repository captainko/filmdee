import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddFilmService } from '@services/add-film.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export interface Film {
  id?: string;
  name?: string;
  quality?: string;
  launch?: { day: number, month: number, year: number };
}

export interface LFilm {
  image?: string;
  link?: string;
  now_ep?: string;
  total_ep?: string;
  id?: string;
  name_vi?: string;
  name?: string;
  quality?: string;
  view?: number;
  time_update?: { day: number, month: number, year: number };
  caterogy?: any;
}

const states = ['Hành Động - 1', 'Phiêu Lưu - 2', 'Tâm Lý - 3', 'Lãng Mạn - 4', 'Khoa Học - 5', 'Viễn Tưởng - 6',
  'Lịch Sử - 7', 'Cổ Trang - 8', 'Giải Trí - 9', 'Âm Nhạc - 10', 'Thể Thao - 11', 'Kinh Dị - 12',
  'Siêu Nhiên - 13', 'Giáo Dục - 14', 'Hình Sự - 15', 'Gia Đình - 16', 'Công Nghệ - 17', 'Hài Hước - 18',
  'Trinh Thám - 19', 'Anh Hùng - 20', 'Học Đường - 21', '18+ - 22', 'Võ Thuật - 23', 'Kiếm Hiệp - 24',
  'Tài Liệu - 25', 'Thần Thoại - 26', 'Thực Tế - 27', 'Drama - 28', 'DC - 29', 'Marvel - 30', 'Anime - 31',
  'Manga - 32', 'Tự Nhiên - 33'];

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
  list: LFilm;

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
    
    this.list = {};
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

  asd() {
    this.list.id = '20';
    this.list.image = 'https://firebasestorage.googleapis.com/v0/b/phimdee-image2.appspot.com/o/hoat-hinh%2F20-chien-binh-bakugan-min.jpg?alt=media&token=1a58fb87-b19d-4915-8527-f4f07793292d';
    this.list.link = 'chien-binh-bakugan-' + this.list.id;
    this.list.now_ep = '18';
    this.list.total_ep = '18';
    this.list.name_vi = 'Chiến Binh Bakugan';
    this.list.name = 'Bakugan Battle Brawlers';
    this.list.quality = 'HD';
    this.list.view = 64;
    this.list.time_update = { day: 13, month: 1, year: 2019 };
    this.list.caterogy = [
      '1',
      '2',
      '6',
      '31'
    ];
    this.addfilmService.addFilm(this.list, this.list.id);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
