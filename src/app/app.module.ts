import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PgTemplateModule } from 'pg-template';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PgTemplateModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'home', component: AppComponent},
        { path: 'news', component: AppComponent},
        { path: 'contact', component: AppComponent},
        { path: 'about', component: AppComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
