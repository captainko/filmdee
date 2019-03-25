import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  kio = false;
  active: number = 0;
  open: number = 0;
  height_ul: number = 0;
  check_sub = false;
  lists: Array<Object> = [
    {
      title: 'Phim', icon: 'fa-film-alt', id: 0, check_click: false,
      list_subs: [
        { title: 'Thêm Phim', color: '#47e5d7', id: '3a', route: "addfilm" },
        { title: 'List Phim', color: '#febe29', id: '3b', route: "" }
      ]
    },
    {
      title: 'Diễn Viên', icon: 'fa-portrait', id: 1, check_click: false,
      list_subs: [
        { title: 'Thêm Diễn Viên', color: '#47e5d7', id: '3a' },
        { title: 'List Diễn Viên', color: '#febe29', id: '3b' }
      ]
    },
    { title: 'User', icon: 'fa-users', id: 2 },
    { title: 'Video Background', icon: 'fa-video', id: 3 },
  ];
  constructor() {
    this.activateClass(0);
  }

  ngOnInit() {
    // jQuery('.container').perfectScrollbar();
  }

  activateClass(i) {
    this.active = i;
    this.open = i;
    this.check_sub = false;

    // tslint:disable-next-line: no-var-keyword
    for (var x in this.lists) {
      // tslint:disable-next-line: curly
      if (x != i)
        this.lists[x + ''].check_click = false;
    }
    this.lists[i + ''].check_click = !this.lists[i + ''].check_click;
    if (this.lists[i + ''].list_subs) {
      this.height_ul = this.lists[i + ''].list_subs.length * 50;
    } else {
      this.height_ul = 0;
    }
    // console.log(this.height_ul);
  }

  activateClass_c2(id) {
    this.active = id;
    this.check_sub = true;
  }

  ok() {
    this.kio = !this.kio;
  }

}
