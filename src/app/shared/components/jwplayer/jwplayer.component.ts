import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
declare var jwplayer: any;
// declare var jQuery: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JwplayerComponent implements OnInit {
  

  constructor() {
  }


  filelist: any = [
    {
      file: "https://firebasestorage.googleapis.com/v0/b/dogs-43980.appspot.com/o/hls%2Flist.m3u8?alt=media&token=c564e0c0-3b1b-4189-8ef2-4949d10ab17f",
      image: "https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F1.jpg?alt=media&token=87559340-07a7-4bb3-ac77-0cb10ca36c8c",
      title: "Đảo Hải Tặc",
      label: "0",
      type: "hls",
      preload: "metadata"
    }, {
      file: "https://firebasestorage.googleapis.com/v0/b/dogs-43980.appspot.com/o/test3%2F1551720091048_ui.m3u8?alt=media&token=0d3edc07-660b-40a5-a20e-060142ad2c19",
      image: "https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F10.jpg?alt=media&token=c3a0e51f-2e64-4372-9d26-6e04a04ff592",
      title: "Black Panther",
      label: "0",
      type: "hls",
      preload: "metadata"
    }
  ];

  

  ngOnInit() {
    jwplayer('player').setup({
      title: 'Player Test',
      playlist: [{
        // 
        sources: [
          {
            file: "https://firebasestorage.googleapis.com/v0/b/phimdee-video3.appspot.com/o/test3%2F1551757847657_demo%20(16).m3u8?alt=media&token=6523768b-2284-43e6-836b-a3331872fccc",
            image: "https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F1.jpg?alt=media&token=87559340-07a7-4bb3-ac77-0cb10ca36c8c",
            title: "Đảo Hải Tặc",
            label: "0",
            type: "hls",
            preload: "metadata"
          }
        ],
        tracks: [{
          file: "https://firebasestorage.googleapis.com/v0/b/phimdee-video3.appspot.com/o/test3%2F1551758123783_sub.srt?alt=media&token=ad9d8ea9-4d5b-4e5b-a0b4-1704728809c4",
          label: "Tiếng Việt",
          kind: "captions",
          "default": true
        }, {
          file: "https://firebasestorage.googleapis.com/v0/b/phimdee-video3.appspot.com/o/test3%2F1551758123783_sub.srt?alt=media&token=ad9d8ea9-4d5b-4e5b-a0b4-1704728809c4",
          kind: "captions",
          label: "Tiếng Anh"
        }],
        // width: 640,
        // height: 360,
        // aspectratio: '16:9',
        mute: false,
        autostart: true,
        primary: 'html5',
        hlshtml: true,
      }]
    });



    jwplayer('player').on('time', function (e) {
      console.log(jwplayer('player').getPosition());
      localStorage.id18928 = Math.floor(jwplayer('player').getPosition());

      // setItem('18928', Math.floor(jwplayer('player').getPosition()), null, null, null, null);
    });




    jwplayer('player').on('ready', function () {
      let img = 'assets/images/icons/playlist.svg';
      let tooltip = 'Chọn Tập';
      let callback = jwplayer().load(this.filelist);

      var a = function() {
        alert('Hello Microsoft User!');
        this.episode = true;
      }
      
      
      jwplayer('player').addButton(img, tooltip, a, 'duy', 'hehe');
      if (localStorage.id18928) {
        console.log(localStorage.id18928);

        jwplayer('player').seek(parseInt(localStorage.id18928));
      }
      else {
        // logMessage('No video resume cookie detected. Refresh page.');
      }
    });


    

  }
}
