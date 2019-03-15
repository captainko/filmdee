import { Component, OnInit, ViewEncapsulation, HostListener, HostBinding, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Videos } from '@shared/components/videos/videos';
import { FacebookService, InitParams } from 'ngx-facebook';
import { OwlCarousel } from 'ngx-owl-carousel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayComponent implements OnInit, AfterViewInit {

  @ViewChild("play") height_play: ElementRef;
  @ViewChild('owlElement') owlElement: OwlCarousel

  check_poster: boolean = false;
  check_video: boolean = true;
  play: boolean = false;
  go: number = null;

  // DATA

  data = {
    content: {
      logo: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/logo-film.png?alt=media&token=824a9969-3485-4d16-9664-544d7779e0a9',
      name: 'Chiến Binh Báo Đen',
      like: 389,
      launch: {day: '02', month: '03', year: '2018'},
      time: '129',
      quality: 'HD+',
      age: '16+',

      short_description: 'A forensics expert who wakes from a coma with amazing new powers squares off against forces threatening the city in this live-action superhero romp.',
      tags: ['Phim lẻ', 'Hành động', 'Tâm lý', 'Nhiều tập', 'Marvel commit'],
    },

    detail: {
      image1: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/info01.jpg?alt=media&token=886b3334-efa4-4852-b6fd-9c890323bec1',
      image2: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/info02.jpg?alt=media&token=f2bd8aad-011d-469c-abcc-ba693256e9e8',
      launch: {day: '02', month: '03', year: '2018'},
      nation: 'Mỹ',
      directors: 'Ryan Coogler',
      author: 'Stan Lee',
      description1: 'Chiến binh Báo Đen (tiếng Anh: Black Panther) là một phim của điện ảnh Hoa Kỳ dựa trên nhân vật siêu anh hùng cùng tên của hãng Marvel Comics, sản xuất bởi Marvel Studios và phân phối bởi Walt Disney Studios Motion Pictures. Đây là bộ phim thứ 18 trong Vũ trụ Điện ảnh Marvel (MCU), đồng thời đánh dấu bộ phim siêu anh hùng da màu đầu tiên.',
      description2: 'Vương quốc Wakanda, quê hương của Black Panther / T\'Challa hiện ra qua lời kể của một nhân chứng sống sót trở về. Đây là quốc gia khá khép kín và sở hữu lượng Vibranium lớn nhất trên thế giới. Black Panther - người cầm quyền của Wakanda sở hữu bộ áo giáp chống đạn và móng vuốt sắc nhọn, anh được miêu tả là “người tốt với trái tim nhân hậu”. Nhưng cũng chính vì những đức tính tốt này mà Black Panther gặp khó khăn khi kế thừa ngai vàng sau khi vua cha băng hà. Đối mặt với sự phản bội và hiểm nguy, vị vua trẻ phải tập hợp các đồng minh và phát huy toàn bộ sức mạnh của Black Panther để đánh bại kẻ thù, đem lại an bình cho nhân dân của mình.',
    },

    actor: [
      { id: '1', name: 'Chadwick Boseman', role: 'T\'Challa', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5'},
      { id: '2', name: 'Michael B. Jordan', role: 'Erik Killmonger', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a'},
      { id: '3', name: 'Lupita Nyong\'o', role: 'Nakia', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd'},
      { id: '4', name: 'Danai Gurira', role: 'Okoye', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/04a.jpg?alt=media&token=5c74967d-35be-4991-bafc-8b3c915db784'},
      { id: '5', name: 'Martin Freeman', role: 'Everett Ross', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/05a.jpg?alt=media&token=41685429-8281-4334-966e-914296b50cd3'},
      { id: '6', name: 'Letitia Wright', role: 'Shuri', avatar: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/06a.jpg?alt=media&token=193ed906-a689-447c-97d6-23931fb0819a'},
    ],
    
    video_background: {
      video: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video.appspot.com/o/test%2F1551414168083_demo%20(2).m3u8?alt=media&token=d0156c18-2027-4fd8-863a-06e2fdb64e5c',
      image: ''
    },

    server1: {
      link: 'https://hls.hydrax.net/7UsFLyKue3vLdhjfl2jYOzTjodRbnlFUotxY7UIp6luK7Jup6I/0/playlist.m3u8',
      subvi: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video4.appspot.com/o/sub-vi.srt?alt=media&token=239c6df3-5596-4b52-9689-2867463df225',
      suben: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video4.appspot.com/o/sub-en.srt?alt=media&token=8a1367e0-2d85-46ea-9221-f59d9c77bb53',
    },

    server2: {
      link: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video4.appspot.com/o/film.m3u8?alt=media&token=9b299cd8-351a-4a0e-b5cb-30abda075b10',
      subvi: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video4.appspot.com/o/sub-vi.srt?alt=media&token=239c6df3-5596-4b52-9689-2867463df225',
      suben: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video4.appspot.com/o/sub-en.srt?alt=media&token=8a1367e0-2d85-46ea-9221-f59d9c77bb53',
    },

    server3: 'https://www.fembed.com/v/3qo1w65m29y',
    server4: 'https://vcstream.to/embed/5c8290f940af4/ff.mp4',

    link_comment: 'https://film-dee-aaf1a.firebaseapp.com',
  }

  image_background_m = 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/background-m.jpg?alt=media&token=e3963f1f-4805-4c01-9c48-b377760a7736';
  image_background_pc = 'https://firebasestorage.googleapis.com/v0/b/upvideo2-d1d8f.appspot.com/o/background.jpg?alt=media&token=86f70c2b-eb31-4ac0-9fe4-7cfb8f9e808a';

  server = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false }
  ];

  iframe_url3() {
    return this.sanitizer.bypassSecurityTrustUrl(this.data.server3);
  }

  choice_sv(id) {
    for (let index = 0; index < this.server.length; index++) {
      if(id == this.server[index].id){
        this.server[index].active = true;
      }else{
        this.server[index].active = false;
      }
    }
  }

  active_link = 3;
  episodes = [
    { id: 1, link: 'abv' },
    { id: 2, link: 'abv' },
    { id: 3, link: 'abv' },
    { id: 4, link: 'abv' },
    { id: 5, link: 'abv' },
    { id: 6, link: 'abv' },
    { id: 7, link: 'abv' },
    { id: 8, link: 'abv' },
    { id: 9, link: 'abv' },
    { id: 10, link: 'abv' },
    { id: 11, link: 'abv' },
    { id: 12, link: 'abv' },
    { id: 13, link: 'abv' },
    { id: 14, link: 'abv' },
    { id: 15, link: 'abv' },
    { id: 16, link: 'abv' },
    { id: 17, link: 'abv' },
    { id: 18, link: 'abv' },
    { id: 19, link: 'abv' },
    { id: 20, link: 'abv' },
    { id: 21, link: 'abv' },
    { id: 22, link: 'abv' },
    { id: 23, link: 'abv' },
    { id: 24, link: 'abv' },
    { id: 25, link: 'abv' },
    { id: 26, link: 'abv' },
    { id: 27, link: 'abv' },
    { id: 28, link: 'abv' },
    { id: 29, link: 'abv' },
    { id: 30, link: 'abv' },
    { id: 31, link: 'abv' },
    { id: 32, link: 'abv' },
    { id: 33, link: 'abv' },
    { id: 34, link: 'abv' },
    { id: 35, link: 'abv' },
    { id: 36, link: 'abv' },
    { id: 37, link: 'abv' },
    { id: 38, link: 'abv' },
    { id: 39, link: 'abv' },
    { id: 40, link: 'abv' },
  ]

  customOptions: any = {
    margin: 10,
    loop: false,
    dots: false,
    center: false,
    responsive: {
      0: {
        items: 2,
        slideBy: 2
      },
      200: {
        items: 6,
        slideBy: 6
      },
      300: {
        items: 4,
        slideBy: 4
      },
      430: {
        items: 5,
        slideBy: 5
      },
      500: {
        items: 6,
        slideBy: 6
      },
      550: {
        items: 7,
        slideBy: 7
      },
      580: {
        items: 8,
        slideBy: 8
      },
      620: {
        items: 9,
        slideBy: 9
      },
      690: {
        items: 10,
        slideBy: 10
      },
      760: {
        items: 11,
        slideBy: 11
      },
      800: {
        items: 12,
        slideBy: 12
      },
      900: {
        items: 13,
        slideBy: 13
      },
      1007: {
        items: 11,
        slideBy: 11
      },
      1100: {
        items: 12,
        slideBy: 12
      },
      1200: {
        items: 13,
        slideBy: 13
      },
      1300: {
        items: 14,
        slideBy: 14
      },
      1400: {
        items: 15,
        slideBy: 15
      },
      1500: {
        items: 16,
        slideBy: 16
      },
      1600: {
        items: 17,
        slideBy: 17
      },
      1700: {
        items: 18,
        slideBy: 18
      },
      1800: {
        items: 19,
        slideBy: 19
      },
      1900: {
        items: 20,
        slideBy: 20
      },
    },
    nav: false
  }



  next_e() {
    if (this.go) {
      alert('chuyển đến ' + this.go);
    } else {
      this.owlElement.next([200]);
    }
  }

  prev_e() {
    this.owlElement.previous([200]);
  }
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth >= 992 && !this.play) {
      this.check_poster = false;
      this.check_video = true;
      this.data.video_background.image = this.image_background_pc;

    } else if (window.innerWidth < 992 && !this.play) {
      this.check_poster = true;
      this.check_video = false;
      this.data.video_background.image = this.image_background_m;
    }

    console.log(this.data.video_background.image);
    
  }

  onVoted() {
    this.play = true;
    this.check_poster = true;
    this.check_video = false;
  }

  ngAfterViewInit() {

  }

  styleObject0(): any {
    if (this.menus[0].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }

  styleObject1(): any {
    if (this.menus[1].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }

  styleObject2(): any {
    if (this.menus[2].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }

  styleObject3(): any {
    if (this.menus[3].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }


  menus = [
    { active: true, name: 'Tổng Quan' },
    { active: false, name: 'Giới Thiệu' },
    { active: false, name: 'Diễn Viên' },
    { active: false, name: 'Thảo Luận' }
  ]

  constructor(private cdRef: ChangeDetectorRef, private fb: FacebookService, private sanitizer: DomSanitizer) {
    this.getScreenSize();
    let initParams: InitParams = {
      appId: '708064406069048',
      xfbml: true,
      version: 'v3.2'
    };

    fb.init(initParams);

    var link = window.location.href.split("-");
    console.log(link[link.length - 1]);
    

  }


  ngOnInit() {
  }

  active(vl) {
    for (let index = 0; index < this.menus.length; index++) {
      if (index != vl) {
        this.menus[index].active = false;
      } else {
        this.menus[index].active = true;
      }
    }
  }

}
