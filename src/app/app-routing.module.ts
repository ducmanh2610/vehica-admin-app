import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import {
  AnalyticsComponent,
  BrandListComponent,
  CarlistComponent,
  CategoryListComponent,
  CustomerListComponent,
  DashboardComponent,
  EmailComponent,
  EmployeeListComponent,
  ImageListComponent,
  CarDetailComponent,
  BrandDetailComponent
} from 'src/app/pages'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'cars', component: CarlistComponent, children: [
      { path: 'detail', component: CarDetailComponent }
    ]
  },
  { path: 'car-brands', component: BrandListComponent },
  { path: 'car-detail', component: CarDetailComponent },
  { path: 'car-brand-detail', component: BrandDetailComponent },
  // { path: 'customer-list', component: CustomerListComponent },
  // { path: 'email', component: EmailComponent },
  { path: 'employees', component: EmployeeListComponent },
  // { path: 'image-list', component: ImageListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
