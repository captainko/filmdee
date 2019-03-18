import { BoxCard } from './../../shared/components/cards/box-card/box-card.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  listFilms: BoxCard[] = [
    { id: 1, total: 20, now: 12, quality: 'HD', name: 'Đảo Hải Tặc', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F1.jpg?alt=media&token=87559340-07a7-4bb3-ac77-0cb10ca36c8c' },
    { id: 2, total: 30, now: 16, quality: '2K', name: 'Vụ Nổ Lớn: Phần 12', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F2.jpg?alt=media&token=71b9de19-4c3a-42c3-a270-6c486b38263e' },
    { id: 3, total: 20, now: 20, quality: 'HD', name: 'Người Hùng Tia Chớp Phần 5', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F3.jpg?alt=media&token=0de9f7e3-f491-4f5b-9e49-d0ea4d160f25' },
    { id: 4, total: 35, now: 24, quality: 'HD+', name: 'Hỏa Vương Phần 2 Chi Thiên Lý Đồng Phong', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F4.jpg?alt=media&token=f4aa9f01-972a-4332-8382-8d219c2c4d9b' },
    { id: 5, total: 37, now: 32, quality: 'HD+', name: 'Manh Thê Thực Thần Bản Hoạt Hình', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F5.jpg?alt=media&token=1c3c6496-3539-45b3-8923-1984f07c408a' },
    { id: 6, total: 16, now: 11, quality: 'HD', name: 'Star Twinkle Precure', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F6.jpg?alt=media&token=74c8d232-1fd5-4411-959e-0b55ccf37b59' },
    { id: 7, total: 25, now: 17, quality: '2K', name: 'Nhóc Trùm: Đi Làm Lại Phần 2', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F7.jpg?alt=media&token=1dcabbc7-5b06-4600-96da-df3a494a6e1b' },
    { id: 8, total: 1, now: 1, quality: '4K', name: 'Aquaman: Đế Vương Atlantis', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F8.jpg?alt=media&token=b7323023-b448-4ed2-b5b0-b008deb480a1' },
    { id: 9, total: 22, now: 20, quality: 'HD', name: 'Dị Nhân Legion: Phần 1', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F9.jpg?alt=media&token=943a04fc-07d3-47de-80fb-756e9d016d34' },
    { id: 10, total: 1, now: 1, quality: '4K', name: 'Chiến Binh Báo Đen', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F10.jpg?alt=media&token=c3a0e51f-2e64-4372-9d26-6e04a04ff592' }
  ]

  actor = {
    id: 1,
    name: 'Michael B. Jordan',
    born: {
      day: '09',
      month: '02',
      year: '1987'
    }
    ,
    job: 'Ca sĩ',
    movie: this.listFilms,
    age: 0,
    sex: 'Nam',
    country: 'Mỹ',
    des: `Michael Bakari Jordan is an American actor. He is known for his film roles as shooting victim Oscar Grant in the drama Fruitvale Station, boxer Adonis Creed in the Rocky sequel film Creed and main antagonist Erik Killmonger in Black Panther, all three of which were directed by Ryan Coogler.Michael Bakari Jordan is an American actor. He is known for his film roles as shooting victim Oscar Grant in the drama Fruitvale Station, boxer Adonis Creed in the Rocky sequel film Creed and main antagonist Erik Killmonger in Black Panther, all three of which were directed by Ryan Coogler.`
  }

  constructor() {
    let date: Date = new Date();

    let year = date.getFullYear();

    this.actor.age = year - parseInt(this.actor.born.year);
  }

  ngOnInit() {

  }

}
