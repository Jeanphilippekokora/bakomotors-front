import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  home = true;
  bako = false;
  news = false;
  order = false;
  tech = false;

  constructor() { }

  ngOnInit(): void {
  }


  gtaccueil(){
    this.home = true;
    this.bako = false;
    this.news = false;
    this.order = false;
    this.tech = false;
  }

  gtbako(){
    this.home = false;
    this.bako = true;
    this.news = false;
    this.order = false;
    this.tech = false;
   }

   gtnews(){
    this.home = false;
    this.bako = false;
    this.news = true;
    this.order = false;
    this.tech = false;
   }

  gtorder(){
    this.home = false;
    this.bako = false;
    this.news = false;
    this.order = true;
    this.tech = false;
  }

  gttech(){
    this.home = false;
    this.bako = false;
    this.news = false;
    this.order = false;
    this.tech = true;
  }


}
