import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccentRulesDialogComponent } from './accent-rules-dialog/accent-rules-dialog.component';

@Component({
  selector: 'app-spanish-game',
  templateUrl: './spanish-game.component.html',
  styleUrls: ['./spanish-game.component.scss']
})
export class SpanishGameComponent implements OnInit {

  wordsAnswers = ['anís', 'papá', 'cajón', 'artén', 'maniquí', 'venís', 'útil', 'lápiz', 'álbum', 'alcázar', 'cándido', 'esdrújula', 'cuéntaselo', 'celebérrimo'];
  words = ['anis', 'papa', 'cajon', 'arten', 'maniqui', 'venis', 'util', 'lapiz', 'album', 'alcazar', 'candido', 'esdrujula', 'cuentaselo', 'celeberrimo'];
  word = [];
  currentIndex = 0;
  correct = false;
  answered = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.currentIndex = Math.floor((Math.random() * this.words.length));
    this.word = this.words[this.currentIndex].split("");

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AccentRulesDialogComponent, {
      width: '600px',
      data: { name: "Gabriel", animal: "Moncho" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  accentLetter = function (i) {
    if (!this.answered) {
      switch (this.word[i]) {
        case 'a': this.word[i] = 'á'; break;
        case 'e': this.word[i] = 'é'; break;
        case 'i': this.word[i] = 'í'; break;
        case 'o': this.word[i] = 'ó'; break;
        case 'u': this.word[i] = 'ú'; break;
        case 'á': this.word[i] = 'a'; break;
        case 'é': this.word[i] = 'e'; break;
        case 'í': this.word[i] = 'i'; break;
        case 'ó': this.word[i] = 'o'; break;
        case 'ú': this.word[i] = 'u'; break;
      }
      this.correct = (this.word.join("") == this.wordsAnswers[this.currentIndex]);
      this.answered = true;
    }
  }
  prepareNext = function (){
    this.words.splice(this.currentIndex,1);
    this.wordsAnswers.splice(this.currentIndex,1);
    this.currentIndex = Math.floor((Math.random() * this.words.length));
    this.word = this.words[this.currentIndex].split("");
    this.correct = false;
    this.answered = false;


  }
}
