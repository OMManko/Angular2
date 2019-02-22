import {Component, EventEmitter, OnInit, Output, Input, NgModule} from '@angular/core';
import {FormBuilder, FormsModule, FormControl, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {NewsDataService} from '../news-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  imports: [
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})

export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private newsDataService: NewsDataService, private router: RouterTestingModule) { }

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
    //this.router.navigate(['']);
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
