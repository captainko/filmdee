import { Component } from '@angular/core';
import { PathService } from '@services/path/path.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmdee';
  constructor(private pathService: PathService) {

  }
}
