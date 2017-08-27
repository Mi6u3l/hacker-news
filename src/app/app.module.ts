import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { YcombinatorService } from './services/ycombinator.service';

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
    HttpModule
  ],
  providers: [
    YcombinatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
