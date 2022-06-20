import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-space',
  templateUrl: './news-space.component.html',
  styleUrls: ['./news-space.component.css']
})
export class NewsSpaceComponent implements OnInit {

  bDix = false;
  bVingt = false;
  bTrente = false;

  constructor() { }

  ngOnInit(): void {
  }

    changeDix(){
       this.bDix = true;
       this.bVingt = false;
       this.bTrente = false;
    }

    changeVingt(){
      this.bDix = false;
      this.bVingt = true;
      this.bTrente = false;
    }

    changeTrente(){
       this.bDix = false;
       this.bVingt = false;
       this.bTrente = true;
    }

}
