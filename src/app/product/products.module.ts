import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachinComponent } from './washingmachin/washingmachin.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
 
import { UtilityModule } from '../models/utility.module';

const prodRoutes: Routes = [
  { path:'product',component: ProductComponent, children:[
    {path:'laptop', component:LaptopComponent},
    {path:'tablet', component: TabletComponent},
    {path:'tv', component: TvComponent},
    {path:'washingmachin', component:WashingmachinComponent},
  ]}, // localhost://4200/product
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
    UtilityModule
 ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { }
