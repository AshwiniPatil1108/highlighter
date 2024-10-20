import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HighlighterDirective } from './shared/directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    
    HighlighterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
