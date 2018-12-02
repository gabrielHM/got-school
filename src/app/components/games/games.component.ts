import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  games = [
    {name:"Scrambble", link:"/gotschool/scrambble", description:"The original word game.", image: "assets/images/scrambble.jpg"},
    {name:"PVP Math",link:"/gotschool/pvpmath", description:"Game of the year edition. The Puerto Rico got talent of math.", image: "assets/images/pvpmath.jpg"},
    {name:"Acentos", link:"/gotschool/spanish_game", description:"Do you even punctuate? ¿Khè?", image: "https://i1.wp.com/www.sonria.com/wp-content/uploads/2016/04/acento.gif?zoom=2.5&resize=795%2C397"}

  ];

}
