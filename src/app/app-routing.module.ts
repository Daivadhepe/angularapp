 
  import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
// import { AContactUsComponent } from './acontact-us/acontact-us.component';
// import { AHomeComponent } from './ahome/ahome.component';
// import { AloginPageComponent } from './alogin-page/alogin-page.component';
// import { APageNotFoundComponent } from './apage-not-found/apage-not-found.component';
// import { AProductComponent } from './aproduct/aproduct.component';
// import { DressComponent } from './aproduct/dress/dress.component';
// import { JwelleryComponent } from './aproduct/jwellery/jwellery.component';
// import { StationeryComponent } from './aproduct/stationery/stationery.component';
// import { ToysComponent } from './aproduct/toys/toys.component';






import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
 
 


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},//localhost://4200/vgv njjhhvgvhb
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},// localhost://4200/home
  { path:'aboutus', component: AboutusComponent} ,// localhost://4200/aboutus
  
  { path:'contactus', component: ContactusComponent},//localhost://4200/contactus 
 
 {path:'demopost',component:DemopostComponent},
 {path:'postdetails/:id',component:PostdetailsComponent},
 {path:'product',loadChildren:'./product/products.module#ProductsModule'},
 {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'**',component:PageNotFoundComponent},
];






// const routes: Routes = [
// {path:'',redirectTo:'alogin-page',pathMatch:'full'},
// { path:'alogin-page',component:AloginPageComponent},
// { path:'ahome',component:AHomeComponent},
// {path:'acontactus',component:AContactUsComponent},
//  {path:'aproduct',component:AProductComponent,children:[
//   {path:'dress',component:DressComponent},
//   {path:'jwellery',component:JwelleryComponent},
//   {path:'stationery',component: StationeryComponent},
//   {path:'toys',component:ToysComponent},

//  ]},
//  {path:'**',component:APageNotFoundComponent},

// ]


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log(' AppRoutingModule loaded');
    
  }
 }

 
 