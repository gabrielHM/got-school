import { Component, OnInit } from '@angular/core';

export interface Tile {
  picName: string;
  cols; number;
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
    { imgage: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXn-2CjIDfAhUn74MKHWdOCuYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.unilad.co.uk%2Fgaming%2Fthe-nine-worst-video-game-character-redesigns%2F&psig=AOvVaw3sY2OlDr1zcV-m8CGnT4gK&ust=1543803932550352', description:"The original word game.", cols: 1, rows: 2 },
    { imgage: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXn-2CjIDfAhUn74MKHWdOCuYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.unilad.co.uk%2Fgaming%2Fthe-nine-worst-video-game-character-redesigns%2F&psig=AOvVaw3sY2OlDr1zcV-m8CGnT4gK&ust=1543803932550352', description:"The original word game.", cols: 1, rows: 2 },
    { imgage: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXn-2CjIDfAhUn74MKHWdOCuYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.unilad.co.uk%2Fgaming%2Fthe-nine-worst-video-game-character-redesigns%2F&psig=AOvVaw3sY2OlDr1zcV-m8CGnT4gK&ust=1543803932550352', description:"The original word game.", cols: 1, rows: 2 },
    { imgage: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXn-2CjIDfAhUn74MKHWdOCuYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.unilad.co.uk%2Fgaming%2Fthe-nine-worst-video-game-character-redesigns%2F&psig=AOvVaw3sY2OlDr1zcV-m8CGnT4gK&ust=1543803932550352', description:"The original word game.", cols: 1, rows: 3 },
    { imgage: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXn-2CjIDfAhUn74MKHWdOCuYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.unilad.co.uk%2Fgaming%2Fthe-nine-worst-video-game-character-redesigns%2F&psig=AOvVaw3sY2OlDr1zcV-m8CGnT4gK&ust=1543803932550352', description:"The original word game.", cols: 1, rows: 3 },
   ];


}
