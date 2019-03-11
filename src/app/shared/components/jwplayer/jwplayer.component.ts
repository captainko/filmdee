import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
declare var jwplayer: any;
// declare var jQuery: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JwplayerComponent implements OnInit {

  @Input('link') link: any;

  constructor() {
  }



  ngOnInit() {
    jwplayer('player').setup({
      title: 'Player Test',
      playlist: [{

        sources: [
          {
            file: this.link.link,
            title: 'Đảo Hải Tặc',
            label: '0',
            type: 'hls',
            preload: 'metadata'
          }
        ],
        tracks: [{
          file: this.link.subvi,
          label: 'Tiếng Việt',
          kind: 'captions',
          'default': true
        }, {
          file: this.link.suben,
          kind: 'captions',
          label: 'Tiếng Anh'
        }],
        mute: false,
        autostart: true,
        primary: 'html5',
        hlshtml: true,
      }]
    });

    jwplayer('player').on('time', function (e) {
      localStorage.id18928 = Math.floor(jwplayer('player').getPosition());
    });

    jwplayer('player').on('ready', function () {
      if (localStorage.id18928) {
        jwplayer('player').seek(parseInt(localStorage.id18928, 0));
      }
      else {
      }
    });
  }
}
