import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;
  viewDate = new Date();
  total : number[];
  finished : number[];
  classes : string[];
events = [{
  start: new Date('Dec 7, 2018'),
  end: new Date('Dec 14, 2018'),
  title: 'Final Exams',
  color: '#42f4cb',
  allDay: true,
  resizable: {
    beforeStart: false,
    afterEnd: false,
  }}];
  constructor() { 
    
    this.total = [5,10,15,10,10,15,5,15];
    this.finished = [3,10,15,8,5,9,3,15];
    this.classes = ["Advanced Spanish", "Adanced English","Pre-Calculus", "History", "Theater", "Math" + "Physical Education", "Physics" ];

    this.chartConfig = {
      type: 'column2d',
      dataFormat: 'json',
    };

    this.dataSource = {
      "chart": {
        "caption": "Weekly Report:",
        "xAxisName": "Days",
        "yAxisName": "Assigments Completed",
        "theme": "fusion",
      },
      "data": [{
        "label": "Sunday",
        "value": "3"
      }, {
        "label": "Monday",
        "value": "5"
      }, {
        "label": "Tuesday",
        "value": "13"
      }, {
        "label": "Wednesday",
        "value": "15"
      }, {
        "label": "Thursday",
        "value": "11"
      }, {
        "label": "Friday",
        "value": "0"
      }, {
        "label": "Saturday",
        "value": "2"
      }]
    };


  }

  ngOnInit() {
  }

}
