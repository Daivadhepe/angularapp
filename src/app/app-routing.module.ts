 
  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},//localhost://4200
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},// localhost://4200/home
  { path:'aboutus', component: AboutusComponent} ,// localhost://4200/aboutus
  { path:'product', component: ProductComponent}, // localhost://4200/product
  { path:'contactus', component: ContactusComponent},//localhost://4200/contactus 
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 
 