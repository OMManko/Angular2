
import { NewsFilterPipe } from './news-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsDataService} from './news-data.service';
import { NewsItemComponent } from './news-item/news-item.component';
import { FormComponent } from './form/form.component';


const AppRoutes: Routes = [
  {path: '', component: NewsListComponent, data: { title: 'Source name' }},
  {path: 'news-edit/:id', component: NewsEditComponent, data: { title: 'Edit' }},
  {path: 'news-add', component: NewsAddComponent, data: { title: 'Add' }},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsEditComponent,
    NewsListComponent,
    NewsAddComponent,
    NewsFilterPipe,
    NewsItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Router,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewsDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
