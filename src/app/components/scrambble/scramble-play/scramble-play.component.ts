import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-scramble-play',
  templateUrl: './scramble-play.component.html',
  styleUrls: ['./scramble-play.component.scss']
})
export class ScramblePlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  review_words = [
    {word: "vinegar", definition: 'dilute acetic acid', type: 'noun'},
    {word: "ball", definition: 'a lavish dance requiring formal attire', type: "noun"},
    {word: "violet", definition: 'of a color intermediate between red and blue', type: "adjective"},
    {word: "spring", definition: 'the elasticity of something that can be stretched and returns to its original length', type: "noun"},
    {word: "masterpiece", definition: 'the most outstanding work of a creative artist or craftsman', type: "noun"},
    {word: "dig", definition: 'turn up, loosen, or remove earth', type: "verb"}
  ];

  scramble=function(str:string) {
    var split_word = str.split("");
    split_word.forEach(function (value));
    return split_word;
  }
}
