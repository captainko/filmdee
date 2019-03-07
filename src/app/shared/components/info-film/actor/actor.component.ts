import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  actors = [
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5', name: 'Chadwick Boseman', vai: 'T\'Challa' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a', name: 'Michael B. Jordan', vai: 'Erik Killmonger' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd', name: 'Lupita Nyong\'o', vai: 'Nakia' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/04a.jpg?alt=media&token=5c74967d-35be-4991-bafc-8b3c915db784', name: 'Danai Gurira', vai: 'Okoye' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/05a.jpg?alt=media&token=41685429-8281-4334-966e-914296b50cd3', name: 'Martin Freeman', vai: 'Everett Ross' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/06a.jpg?alt=media&token=193ed906-a689-447c-97d6-23931fb0819a', name: 'Letitia Wright', vai: 'Shuri' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5', name: 'Chadwick Boseman', vai: 'T\'Challa' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a', name: 'Michael B. Jordan', vai: 'Erik Killmonger' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd', name: 'Lupita Nyong\'o', vai: 'Nakia' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
