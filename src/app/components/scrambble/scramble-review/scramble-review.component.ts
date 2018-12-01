import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scramble-review',
  templateUrl: './scramble-review.component.html',
  styleUrls: ['./scramble-review.component.scss']
})
export class ScrambleReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  review_words = [
    {word: "vinegar", definition: 'dilute acetic acid', type: 'noun'},
    {word: "ball", definition: 'a lavish dance requiring formal attire', type: "noun"},
    {word: "violet", definition: 'of a color intermediate between red and blue', type: "adjective"},
    {word: "spring", definition: 'the elasticity of something that can be stretched and returns to its original length', type: "noun"},
    {word: "masterpiece", definition: 'the most outstanding work of a creative artist or craftsman', type: "noun"}
    // {word: 6, definition: 'Carbon', type: 12.0107},
    // {word: 7, definition: 'Nitrogen', type: 14.0067},
    // {word: 8, definition: 'Oxygen', type: 15.9994},
    // {word: 9, definition: 'Fluorine', type: 18.9984},
    // {word: 10, definition: 'Neon', type: 20.1797},
  ];
}
