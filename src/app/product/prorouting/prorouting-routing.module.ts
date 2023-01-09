import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from '../laptop/laptop.component';
import { ProductComponent } from '../product.component';
import { TabletComponent } from '../tablet/tablet.component';
import { TvComponent } from '../tv/tv.component';
import { WashingmachinComponent } from '../washingmachin/washingmachin.component';


const routes: Routes = [
  { path:'',component: ProductComponent, children:[
    {path:'laptop', component:LaptopComponent},
    {path:'tablet', component: TabletComponent},
    {path:'tv', component: TvComponent},
    {path:'washingmachin', component:WashingmachinComponent},
  ]}, // localhost://4200/product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProroutingRoutingModule {
  constructor(){
    console.log(' ProroutingRoutingModule loaded');
    
  }
 }
