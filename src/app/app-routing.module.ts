 
  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AContactUsComponent } from './acontact-us/acontact-us.component';
import { AHomeComponent } from './ahome/ahome.component';
import { AloginPageComponent } from './alogin-page/alogin-page.component';
import { APageNotFoundComponent } from './apage-not-found/apage-not-found.component';
import { AProductComponent } from './aproduct/aproduct.component';
import { DressComponent } from './aproduct/dress/dress.component';
import { JwelleryComponent } from './aproduct/jwellery/jwellery.component';
import { StationeryComponent } from './aproduct/stationery/stationery.component';
import { ToysComponent } from './aproduct/toys/toys.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { ProductComponent } from './product/product.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { TvComponent } from './product/tv/tv.component';
// import { WashingmachinComponent } from './product/washingmachin/washingmachin.component';


// const routes: Routes = [
//   {path:'',redirectTo:'login',pathMatch:'full'},//localhost://4200/vgv njjhhvgvhb
//   {path:'login',component:LoginComponent},
//   {path:'home',component:HomeComponent},// localhost://4200/home
//   { path:'aboutus', component: AboutusComponent} ,// localhost://4200/aboutus
//   { path:'product',component: ProductComponent, children:[
//     {path:'laptop', component:LaptopComponent},
//     {path:'tablet', component: TabletComponent},
//     {path:'tv', component: TvComponent},
//     {path:'washingmachin', component:WashingmachinComponent},
//   ]}, // localhost://4200/product
//   { path:'contactus', component: ContactusComponent},//localhost://4200/contactus 
//   {path:'**',component:PageNotFoundComponent},
// ];

const routes: Routes = [
{path:'',redirectTo:'alogin-page',pathMatch:'full'},
{ path:'alogin-page',component:AloginPageComponent},
{ path:'ahome',component:AHomeComponent},
{path:'acontactus',component:AContactUsComponent},
 {path:'aproduct',component:AProductComponent,children:[
  {path:'dress',component:DressComponent},
  {path:'jwellery',component:JwelleryComponent},
  {path:'stationery',component: StationeryComponent},
  {path:'toys',component:ToysComponent},

 ]},
 {path:'**',component:APageNotFoundComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 
 