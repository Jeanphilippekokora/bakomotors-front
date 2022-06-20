import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-bako-space',
  templateUrl: './bako-space.component.html',
  styleUrls: ['./bako-space.component.css']
})
export class BakoSpaceComponent implements OnInit {

  bDix = true;
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
