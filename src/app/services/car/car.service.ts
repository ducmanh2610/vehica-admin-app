import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car.model';


const baseUrl = 'localhost:8080/VehicaWebsite/api/v1/'
@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(baseUrl);
  }

  get(carId: Number): Observable<Car> {
    return this.http.get<Car>(`${baseUrl}/car/${carId}`);
  }

  create(data: Car): Observable<Car> {
    return this.http.post<Car>(`${baseUrl}/car`, data);
  }

  update(carId: number, data: any): Observable<Car> {
    return this.http.put(`${baseUrl}/car/${carId}`, data);
  }
}
