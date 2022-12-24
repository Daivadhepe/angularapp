 
  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path:'aboutus', component: AboutusComponent} ,// localhost://4200/aboutus
  { path:'product', component: ProductComponent}, // localhost://4200/product
  { path:'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 
