import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarlistRoutingModule } from './carlist-routing.module';
import { CarDetailComponent } from '../';

@NgModule({
  declarations: [
    CarDetailComponent,
  ],
  imports: [
    FormsModule,
    CarlistRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [CarDetailComponent]
})
export class CarlistModule { }
