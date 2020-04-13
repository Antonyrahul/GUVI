import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricingComponent,
    HomepageComponent,
    CategoryComponent,
    CategorydetailsComponent,
    ProductdetailsComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
