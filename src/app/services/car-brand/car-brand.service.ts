import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBrand } from 'src/app/models/car-brand/car-brand.model';

const baseUrl = 'lochalhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})

export class CarBrandService {

  constructor(private http: HttpClient) { 

  }
  getAll(): Observable<CarBrand> {
    return this.http.get<CarBrand>(`${baseUrl}/car-brands`);
  }

  getById(CarBrandId?: Number): Observable<CarBrand> {
    return this.http.get<CarBrand>(`${baseUrl}/car-brand/${CarBrandId}`);
  }
}
