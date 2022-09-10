import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  MainmenuComponent
} from 'src/app/components/';
import { AppRoutingModule } from './app-routing.module';
import { CarDetailComponent, BrandDetailComponent } from './pages/';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainmenuComponent,
    CarDetailComponent,
    BrandDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
