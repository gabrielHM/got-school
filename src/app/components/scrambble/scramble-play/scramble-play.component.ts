import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/core/http/dictionary.service'

@Component({
  selector: 'app-scramble-play',
  templateUrl: './scramble-play.component.html',
  styleUrls: ['./scramble-play.component.scss']
})
export class ScramblePlayComponent implements OnInit {

  constructor(private dictionary: DictionaryService) { }
  wordMerriam = {};
  
  ngOnInit() {
    this.prepareResponse();
    this.wordMerriam = this.dictionary.getDefinition('spring').subscribe(
      (data) => {console.log(data)},
      (err) => console.log(err.error.message),
      () => {}
    );
  }
  wordIndex = 0;

  review_words = [
    { word: "vinegar", definition: 'dilute acetic acid', type: 'noun' },
    { word: "ball", definition: 'a lavish dance requiring formal attire', type: "noun" },
    { word: "violet", definition: 'of a color intermediate between red and blue', type: "adjective" },
    { word: "spring", definition: 'the elasticity of something that can be stretched and returns to its original length', type: "noun" },
    { word: "masterpiece", definition: 'the most outstanding work of a creative artist or craftsman', type: "noun" },
    { word: "dig", definition: 'turn up, loosen, or remove earth', type: "verb" }
  ];

  currentWord = {
    word: "test",
    scrambble: ["e", "t", "t", "s"],
    definition: 'dilute acetic acid'
  }

  answer = []

  prepareResponse = function () {
    for (var i = 0; i < this.currentWord.scrambble.length; i++) {
      this.answer[i]="_";
    }
  }

  scramble = function (str: string) {
    var split_word = str.split("");
    return split_word;
  }

  getNewWord = function (){
    this.wordMerriam = this.dictionary.getDefinition('spring').subscribe(
      (data) => {console.log(data)},
      (err) => console.log(err.error.message),
      () => {}
    );
  }
}
