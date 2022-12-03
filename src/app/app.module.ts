import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warningAlert/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { AssignDataBindingComponent } from './assign-data-binding/assign-data-binding.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AssignngIfComponent } from './assignng-if/assignng-if.component';
import { AssignngForDirectivesComponent } from './assignng-for-directives/assignng-for-directives.component';
import { AssignngSwitchComponent } from './assignng-switch/assignng-switch.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CuctomDirective } from './cuctom.directive';
import { AssignCustomDireDirective } from './assign-custom-dire.directive';
 
import { NgClassAttributeComponent } from './ng-class-attribute/ng-class-attribute.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { HooksComponent } from './hooks/hooks.component';
import { ParentComponent } from './parent/parent.component';
import { AssignOutputComponent } from './assign-output/assign-output.component';
import { DerevtivesAssignComponent } from './derevtives-assign/derevtives-assign.component';
import { AddRemoveAssignComponent } from './add-remove-assign/add-remove-assign.component';

@NgModule({
  declarations: [
   AppComponent,
    //ServerComponent,
    WarningComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    AssignDataBindingComponent,
    DemoDirectivesComponent,
    NgswitchComponent,
    AssignngIfComponent,
    AssignngForDirectivesComponent,
    AssignngSwitchComponent,
    AttributeComponent,
    CuctomDirective,
    AssignCustomDireDirective,
     
    NgClassAttributeComponent,
    ChildComponent,
    Child2Component,
    HooksComponent,
    ParentComponent,
    AssignOutputComponent,
    DerevtivesAssignComponent,
    AddRemoveAssignComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
