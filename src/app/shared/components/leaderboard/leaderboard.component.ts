import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {

  constructor() { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  SCORE_DATA = [
    {position: 1, school: 'Pedro López', score: 10811},
    {position: 2, school: 'Helium', score: 90122},
    {position: 3, school: 'Lithium', score: 6941},
    {position: 4, school: 'Beryllium', score: 5432},
    {position: 5, school: 'Boron', score: 4665}
  ];

  displayedColumns: string[] = ['position', 'school', 'score'];
  dataSource = new MatTableDataSource(this.SCORE_DATA);
}
