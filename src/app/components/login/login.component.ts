import { Component, OnInit } from '@angular/core';
import { LeaderboardComponent } from 'src/app/shared/components/leaderboard/leaderboard.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [1, 2, 3].map(() => `https://picsum.photos/1920/500?random&t=${Math.random()}`);
}
