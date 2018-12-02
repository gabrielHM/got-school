import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/core/http/math.service'

@Component({
  selector: 'app-pvpmath',
  templateUrl: './pvpmath.component.html',
  styleUrls: ['./pvpmath.component.scss']
})
export class PvpmathComponent implements OnInit {
  
  mathP = {};
  exercise = {"id":"yhbwbrct","question":"<mn>17<\/mn><mo> - <\/mo><mo> ( <\/mo><mn>13<\/mn><mo> + <\/mo><mn>25<\/mn><mo> ) <\/mo>","choices":["<math><mo>-<\/mo><mn>21<\/mn><\/math>","<math><mo>-<\/mo><mn>4<\/mn><\/math>","<math><mn>20<\/mn><\/math>","<math><mo>-<\/mo><mn>8<\/mn><\/math>","<math><mo>-<\/mo><mn>14<\/mn><\/math>"],"correct_choice":0,"instruction":"Evaluate","category":"Arithmetic","topic":"Simple","difficulty":"Intermediate"};
  constructor(private mathService: MathService ) { }

  ngOnInit() {
    // this.prepareQuestion();
  }

  prepareQuestion = function (){
    this.mathP = this.mathService.getExercice().subscribe(
      (data) => {console.log(data); this.exercise = data;},
      (err) => console.log(err.error.message),
      () => {}
    );
  }

}
