import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/core/http/dictionary.service'
import { AbstractExtendedWebDriver } from 'protractor/built/browser';

@Component({
  selector: 'app-scramble-play',
  templateUrl: './scramble-play.component.html',
  styleUrls: ['./scramble-play.component.scss']
})
export class ScramblePlayComponent implements OnInit {

  constructor(private dictionary: DictionaryService) { }
  wordMerriam = {};
  possibleWords = ['woebegone','cactus','add','overt','drop','window','chief','hammer','beginner','low','distinct','low','pull','keen','chance','disarm','comb','painful','press','voiceless','fancy','invent','groan','undesirable','oafish','walk','frightening','gaudy','roof','greet','heat','absorbed','silky','retire','wretched','auspicious','trade','interesting','curved','grin','greasy','picayune','coordinated','balance','moon','sincere','trot','stretch','yard','fasten'];
  index = 0;
  lettersPushed = 0;
  correct=false;
  currentWord = {
    word: "",
    scrambble: [],
    definitions: [],
    type: ""
  }
  answer = [];
  ngOnInit() {
    this.prepareResponse();
  }
  wordIndex = 0;

  

  prepareResponse = function () {
    this.correct= false;
    this.answer = [];
    this.lettersPushed = 0;
    this.index = Math.floor((Math.random() * this.possibleWords.length));
    this.currentWord.word = this.possibleWords[this.index];
    this.currentWord.scrambble = this.scrambble(this.possibleWords[this.index]);
    this.wordMerriam = this.dictionary.getDefinition(this.possibleWords[this.index]).subscribe(
      (data) => {console.log(data); this.currentWord.definitions = data[0].shortdef; this.currentWord.type = data[0].fl},
      (err) => console.log(err.error.message),
      () => {}
    );
    for (var i = 0; i < this.currentWord.scrambble.length; i++) {
      this.answer[i]="_";
    }
    console.log(this.currentWord);
  }

  scrambble = function (str: string) {
    var split_word = [];
    var palabra = str.split("");
    for(var i=0; i < str.length; i++){
      var index = (Math.random() * palabra.length);
      split_word.push(palabra.splice(index,1));
    }
    return split_word;
  }

  submitLetter = function (str: string){
    if(this.lettersPushed < this.currentWord.word.length || 0){
    this.answer[this.lettersPushed] = str;
    this.lettersPushed++;
    this.correct=(this.answer.join("") == this.currentWord.word);
    }
  }
  removeLetter = function (i){
    this.correct= false;
    if(i== this.lettersPushed-1){
    this.answer[i]='_'; 
    this.lettersPushed--;
    }
  }

}
