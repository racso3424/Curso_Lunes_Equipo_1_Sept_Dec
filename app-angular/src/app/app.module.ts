import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { Seccion1Component } from './components/seccion1/seccion1';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    Seccion1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
