import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachinComponent } from './washingmachin/washingmachin.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
 
import { UtilityModule } from '../models/utility.module';
import { ProroutingRoutingModule } from './prorouting/prorouting-routing.module';

const prodRoutes: Routes = [
 
]

@NgModule({
  declarations: [
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachinComponent,
    ProductComponent, 
     
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule,
    ProroutingRoutingModule
 ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log('ProductsModule loaded');
    
  }
 }
