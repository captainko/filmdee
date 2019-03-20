import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  categorysTime = [
    { active: true, name: 'Ngày' },
    { active: false, name: 'Tháng' },
    { active: false, name: 'Năm' }
  ]
  categorys = [
    { active: true, name: 'Phim lẻ' },
    { active: false, name: 'Phim bộ' },
    { active: false, name: 'Anime' }

  ]

  topTenAnime = [
    {
      id: 1,
      name: 'A Madea Family Funeral',
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault.jpg?alt=media&token=26ed2521-0341-400e-b4cf-0f69310418d9',
      content: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      id: 2,
      name: "One Piece",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78',
      content: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 3,
      name: "Sex Education",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(1).jpg?alt=media&token=bede4cde-0b22-4d65-8a98-22a054cee653',
    },
    {
      id: 4,
      name: "The Flash",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/4bb22dd7c4ed2a93013049dd1a8ee2cc0b5dd5de.png?alt=media&token=2821e60d-846e-40fb-954d-ce7d0a16fdb1'
    },
    {
      id: 5,
      name: "Naruto",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/preview.medium.jpg?alt=media&token=061f7e86-b4a1-46be-8a3a-3cc143746cac'
    },
    {
      id: 6,
      name: "Rusia Da Sikva",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 7,
      name: "The Godfather",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/1_Qs9x0isKobtK3msvBafEpg.jpeg?alt=media&token=7ff6972a-9c2b-47fb-b25f-c13dc571b06a'
    },
    {
      id: 8,
      name: "Ashibo",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(2).jpg?alt=media&token=19f6f86a-3736-4157-94e5-2292bdf0fc36'
    },
    {
      id: 9,
      name: "Cmifara",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 10,
      name: "Astrore",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
  ]

  topTenSeries = [
    {
      id: 1,
      name: "Sex Education",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(1).jpg?alt=media&token=bede4cde-0b22-4d65-8a98-22a054cee653'
    },
    {
      id: 2,
      name: "One Piece",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78',
      content: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 3,
      name: 'A Madea Family Funeral',
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault.jpg?alt=media&token=26ed2521-0341-400e-b4cf-0f69310418d9',
      content: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      id: 4,
      name: "The Flash",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/4bb22dd7c4ed2a93013049dd1a8ee2cc0b5dd5de.png?alt=media&token=2821e60d-846e-40fb-954d-ce7d0a16fdb1'
    },
    {
      id: 5,
      name: "Naruto",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/preview.medium.jpg?alt=media&token=061f7e86-b4a1-46be-8a3a-3cc143746cac'
    },
    {
      id: 6,
      name: "Rusia Da Sikva",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 7,
      name: "The Godfather",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/1_Qs9x0isKobtK3msvBafEpg.jpeg?alt=media&token=7ff6972a-9c2b-47fb-b25f-c13dc571b06a'
    },
    {
      id: 8,
      name: "Ashibo",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(2).jpg?alt=media&token=19f6f86a-3736-4157-94e5-2292bdf0fc36'
    },
    {
      id: 9,
      name: "Cmifara",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 10,
      name: "Astrore",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
  ]

  topTenMovie = [
    {
      id: 1,
      name: "One Piece",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78',
      content: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 2,
      name: 'A Madea Family Funeral',
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault.jpg?alt=media&token=26ed2521-0341-400e-b4cf-0f69310418d9',
      content: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      id: 3,
      name: "Sex Education",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(1).jpg?alt=media&token=bede4cde-0b22-4d65-8a98-22a054cee653'
    },
    {
      id: 4,
      name: "The Flash",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/4bb22dd7c4ed2a93013049dd1a8ee2cc0b5dd5de.png?alt=media&token=2821e60d-846e-40fb-954d-ce7d0a16fdb1'
    },
    {
      id: 5,
      name: "Naruto",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/preview.medium.jpg?alt=media&token=061f7e86-b4a1-46be-8a3a-3cc143746cac'
    },
    {
      id: 6,
      name: "Rusia Da Sikva",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 7,
      name: "The Godfather",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/1_Qs9x0isKobtK3msvBafEpg.jpeg?alt=media&token=7ff6972a-9c2b-47fb-b25f-c13dc571b06a'
    },
    {
      id: 8,
      name: "Ashibo",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/maxresdefault%20(2).jpg?alt=media&token=19f6f86a-3736-4157-94e5-2292bdf0fc36'
    },
    {
      id: 9,
      name: "Cmifara",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
    {
      id: 10,
      name: "Astrore",
      img: 'https://firebasestorage.googleapis.com/v0/b/film-dee-aaf1a.appspot.com/o/2526-f7c3590d7508e4ef53ae4209f2f6c6a0.jpg?alt=media&token=0e9d884d-5019-4944-89f3-42df95248e78'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  active(vl) {
    for (let index = 0; index < this.categorysTime.length; index++) {
      if (index != vl) {
        this.categorysTime[index].active = false;
      } else {
        this.categorysTime[index].active = true;
      }
    }
  }
  active2(vl) {
    for (let index = 0; index < this.categorys.length; index++) {
      if (index != vl) {
        this.categorys[index].active = false;
      } else {
        this.categorys[index].active = true;
      }
    }
  }
  styleList0(): any {
    if (window.innerWidth < 992) {
      if (this.categorys[0].active) {
        return { display: 'block' };
      }
      return { display: 'none' };
    }
  }
  styleList1(): any {
    if (window.innerWidth < 992) {
      if (this.categorys[1].active) {
        return { display: 'block' };
      }
      return { display: 'none' };
    }
  }
  styleList2(): any {
    if (window.innerWidth < 992) {
      if (this.categorys[2].active) {
        return { display: 'block' };
      }
      return { display: 'none' };
    }
  }
}
