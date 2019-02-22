import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAddComponent } from './news-add.component';
import { FormComponent } from '../form/form.component';
import {AppComponent} from "../app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';


describe('NewsAddComponent', () => {
  let component: NewsAddComponent;
  let fixture: ComponentFixture<NewsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsAddComponent,
        FormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(NewsAddComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Add article');
  });

});
