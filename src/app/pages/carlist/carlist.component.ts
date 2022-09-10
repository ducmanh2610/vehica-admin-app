import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.sass'],
  providers: [CarService]
})
export class CarlistComponent implements OnInit {
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.getAll();
  }

  public navigateToDetail(): void {
    this.router.navigate(['car-detail']);
  }
}
