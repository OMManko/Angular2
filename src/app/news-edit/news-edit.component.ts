import {Component, Input, NgModule, OnInit} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})

@NgModule({
  imports: [
    RouterTestingModule
  ],
})

export class NewsEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
