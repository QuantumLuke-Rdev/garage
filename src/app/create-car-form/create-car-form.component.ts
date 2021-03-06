import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/classes/car';
import { GarageDisplayerComponent } from '../garage-displayer/garage-displayer.component';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: GarageService,
    private readonly router: Router
  ){
    this.form = formBuilder.group({
      license: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit() : void {
    let car = new Car(this.form.value.license, this.form.value.model, this.form.value.brand);
    this.service.addCar(car).subscribe(
      () => {
        this.router.navigateByUrl("/garage")
      }
    );
  }

  reset() : void {
    this.form.reset();
  }
}
