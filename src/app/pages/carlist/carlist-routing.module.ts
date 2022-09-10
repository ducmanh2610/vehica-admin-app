import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import {
  CarDetailComponent,
} from 'src/app/pages'

const routes: Routes = [
    {path:'detail', component: CarDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class CarlistRoutingModule { }
