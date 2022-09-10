import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  showMainMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  toggleMainMenu(): void{
    this.showMainMenu = !this.showMainMenu;
  }
}
