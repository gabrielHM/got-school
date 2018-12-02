import { Component, OnInit } from '@angular/core';

export interface Avatars {
  images: string;
  description: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-recess',
  templateUrl: './recess.component.html',
  styleUrls: ['./recess.component.scss']
})


export class RecessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  avatars: Avatars[] = [
    { images: 'assets/avatars/alien 1.png', description:"Alien", cols: 1, rows: 2 },
    { images: 'assets/avatars/electric lizard 1.png', description:"Electric Lizard", cols: 1, rows: 2 },
    { images: 'assets/avatars/paper-book 1.png', description:"Paper Book", cols: 1, rows: 2 },
    { images: 'assets/avatars/shark-fish 1.png', description:"Shark Fish", cols: 1, rows: 3 },
    { images: 'assets/avatars/spaceship 1.png', description:"Spaceship", cols: 1, rows: 3 },
   ];


}
