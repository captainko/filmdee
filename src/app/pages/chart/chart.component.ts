import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  topTenAnime = [
    {
      id: 1,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg',
      content: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 2,
      name: 'A Madea Family Funeral',
      img: 'assets/images/thumb-film/2.jpg',
      content: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      id: 3,
      name: "Sex Education",
      img: 'assets/images/thumb-film/3.jpg'
    },
    {
      id: 4,
      name: "The Flash",
      img: 'assets/images/thumb-film/4.jpg'
    },
    {
      id: 4,
      name: "Naruto",
      img: 'assets/images/thumb-film/15.jpg'
    },
    {
      id: 5,
      name: "Rusia Da Sikva",
      img: 'assets/images/thumb-film/5.jpg'
    },
    {
      id: 6,
      name: "The Godfather",
      img: 'assets/images/thumb-film/6.jpg'
    },
    {
      id: 7,
      name: "Ashibo",
      img: 'assets/images/thumb-film/7.jpg'
    },
    {
      id: 8,
      name: "Cmifara",
      img: 'assets/images/thumb-film/8.jpg'
    },
    {
      id: 9,
      name: "Astrore",
      img: 'assets/images/thumb-film/9.jpg'
    },
  ]

  topTenSeries = [
    {
      id: 1,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    },
    {
      id: 2,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    },
    {
      id: 3,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    }
  ]
  
  topTenMovie = [
    {
      id: 1,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    },
    {
      id: 2,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    },
    {
      id: 3,
      name: "One Piece",
      img: 'assets/images/thumb-film/1.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
