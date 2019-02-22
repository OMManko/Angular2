import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NewsDataService} from '../news-data.service';
import { RouterTestingModule } from '@angular/router/testing';



@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})

@NgModule({
  imports: [
    RouterTestingModule
  ],
})

export class NewsAddComponent implements OnInit {

  constructor() { }

  public addForm: boolean = true;

  ngOnInit() {

  }

}
