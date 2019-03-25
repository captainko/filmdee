import { Component, OnInit } from '@angular/core';
import { FakeService } from '@services/fake.service';

export interface User {
  name?: string;
  age?: any;
  sex?: number;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  users: User[];

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
    this.fakeService.getUser('fake', 'sex', 'Nữ').subscribe(users => {
      this.users = users;
    })
  }

}
