import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NewsDataService} from '../news-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private newsDataService: NewsDataService, private router: Router) { }

  @Output() addNews = new EventEmitter<any>();

  @Output() updateNews = new EventEmitter<any>();

  @Input() addForm: boolean;

  articleFormGroup = this.fb.group({
    title: new FormControl('', Validators.required),
    description: new FormControl(),
    content: new FormControl(),
    urlToImage: new FormControl(),
    publishedAt: new FormControl(),
    author: new FormControl(),
    url: new FormControl()
  });

  cancel() {
    this.router.navigate(['']);
  }

  addArticle(form: NgForm) {
    if (this.articleFormGroup.valid) {
      this.newsDataService.add(form.value);
      this.addNews.emit();
    }
    return false;
  }

  ngOnInit() {
  }

}
