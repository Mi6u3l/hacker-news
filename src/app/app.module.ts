import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { YcombinatorService } from './services/ycombinator.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { TopstoriesComponent } from './components/topstories/topstories.component';


@NgModule({
  declarations: [
    AppComponent,
    TopstoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BusyModule,
    BrowserAnimationsModule
  ],
  providers: [
    YcombinatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
