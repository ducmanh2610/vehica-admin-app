import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models';
import { CarService } from 'src/app/services';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.sass']
})


export class CarDetailComponent implements OnInit {
  
  @Input() car?: Car;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}

  ngOnInit(): void {
  }

}
