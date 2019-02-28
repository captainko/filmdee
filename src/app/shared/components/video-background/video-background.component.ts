import { Component, OnInit } from '@angular/core';
import { Videos } from '../videos/videos';


@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  Video: Videos[] = [
    { link: 'https://firebasestorage.googleapis.com/v0/b/upvideos-d69b3.appspot.com/o/demo.mp4?alt=media&token=fc2869cb-5e19-4b42-9e4d-49a06eeb9e3c',
      picture: 'https://firebasestorage.googleapis.com/v0/b/upvideos-d69b3.appspot.com/o/background.jpg?alt=media&token=742bc937-9785-4576-a1eb-f48a404bda31'
    },
  ];
  title = 'A New Devil’s In Town Day To Day ZoHa (2019)';
  content = 'Stay silent. Stay alert. Stay blindfolded. As a terrifying force lies in wait, a mother leads her children on a harrowing journey.';

  

  ngOnInit() {
  }
}
