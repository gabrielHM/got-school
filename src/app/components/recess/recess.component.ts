import { Component, OnInit } from '@angular/core';

export interface avatars {
  images : string;
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

  avatars = [
    { images: 'https://www.spyrothedragon.com/content/dam/atvi/spyro/home/hero/spyro.png', description:"Alien", cols: 1, rows: 2 },     //gadejo
    { images: 'https://www.spyrothedragon.com/content/dam/atvi/spyro/home/hero/spyro.png', description:"Electric Lizard", cols: 1, rows: 2 }, // reptiluz->repticrock
    { images: 'https://www.spyrothedragon.com/content/dam/atvi/spyro/home/hero/spyro.png', description:"Paper Book", cols: 1, rows: 2 },   //exito
    { images: 'https://www.spyrothedragon.com/content/dam/atvi/spyro/home/hero/spyro.png', description:"Shark Fish", cols: 1, rows: 3 },  //tibupez->corrrentin
    { images: 'https://www.spyrothedragon.com/content/dam/atvi/spyro/home/hero/spyro.png', description:"Spaceship", cols: 1, rows: 3 },   //boliespacial
   ];


}
