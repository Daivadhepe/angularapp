import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warningAlert/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { TemplateDrivenAssignComponent } from './template-driven-assign/template-driven-assign.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidationTemplateFormComponent } from './validation-template-form/validation-template-form.component';
import { ValidationTemplateForm2Component } from './validation-template-form2/validation-template-form2.component';
import { ReuderadioComponent } from './reuderadio/reuderadio.component';
import { TemplateForm3Component } from './template-form3/template-form3.component';
 

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
    LifeCycleHooksComponent,
    SimpleformComponent,
    TemplateDrivenAssignComponent,
    TemplateDrivenForm2Component,
    ReactiveFormComponent,
    ValidationTemplateFormComponent,
    ValidationTemplateForm2Component,
    ReuderadioComponent,
    TemplateForm3Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
