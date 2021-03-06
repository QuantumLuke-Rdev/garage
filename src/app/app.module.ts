import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { GarageDisplayerComponent } from './garage-displayer/garage-displayer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CreateCarFormComponent,
    GarageDisplayerComponent,
    ErrorPageComponent,
    CarDetailsPageComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
