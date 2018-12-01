import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;

  constructor() { 
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };

    this.dataSource = {
      "chart": {
        "caption": "Weekly Report:",
        "xAxisName": "Assigments Completed",
        "yAxisName": "Days",
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
