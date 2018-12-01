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
    {'label':'Profile', 'route':'/profile', 'icon':'home'},
    {'label':'Games', 'route':'/games', 'icon':'games'}]
    
    
}
