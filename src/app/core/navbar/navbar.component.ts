import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navLinks = [
    {'label':'Profile', 'route':'/gotschool/profile', 'icon':'home'},
    {'label':'Games', 'route':'/gotschool/games', 'icon':'games'},
    {'label':'Video Resources', 'route':'/gotschool/video_resources', 'icon':'video_library'},
  ]
    
    
}
