import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrambble',
  templateUrl: './scrambble.component.html',
  styleUrls: ['./scrambble.component.scss']
})
export class ScrambbleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ELEMENT_DATA = [
    {word: "vinegar", definition: 'dilute acetic acid', type: 'noun'},
    {word: "ball", definition: 'a lavish dance requiring formal attire', type: "noun"},
    {word: "violet", definition: 'of a color intermediate between red and blue', type: "adjective"},
    {word: "spring", definition: 'the elasticity of something that can be stretched and returns to its original length', type: "noun"},
    {word: "masterpiece", definition: 'the most outstanding work of a creative artist or craftsman', type: "noun"},
    {word: "dig", definition: 'turn up, loosen, or remove earth', type: "verb"}
  ];
    displayedColumns: string[] = ['word', 'definition', 'type'];
    dataSource = this.ELEMENT_DATA;
  }
  

