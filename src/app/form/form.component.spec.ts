import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsDataService } from "../news-data.service";

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let newsDataService: NewsDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [NewsDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    newsDataService = new NewsDataService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form should be invalid', () => {
    component.articleFormGroup.controls['title'].setValue('');
    component.articleFormGroup.controls['description'].setValue('');
    component.articleFormGroup.controls['content'].setValue('');
    component.articleFormGroup.controls['urlToImage'].setValue('');
    component.articleFormGroup.controls['publishedAt'].setValue('');
    component.articleFormGroup.controls['author'].setValue('');
    component.articleFormGroup.controls['url'].setValue('');
    expect(component.articleFormGroup.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.articleFormGroup.controls['title'].setValue('some heading');
    component.articleFormGroup.controls['description'].setValue('some description');
    component.articleFormGroup.controls['content'].setValue('some content');
    component.articleFormGroup.controls['urlToImage'].setValue('https://cdn-images-1.medium.com/max/800/1*tuKurSqmjgQKt9gEaiudEA.png');
    component.articleFormGroup.controls['publishedAt'].setValue('2019-24-01');
    component.articleFormGroup.controls['author'].setValue('Volha Manko');
    component.articleFormGroup.controls['url'].setValue('https://angular.io/guide/testing#nested-component-tests');
    expect(component.articleFormGroup.valid).toBeTruthy();
  });
});
