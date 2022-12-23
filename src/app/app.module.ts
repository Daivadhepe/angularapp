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
 
import { AssignCustomDireDirective } from './assign-custom-dire.directive';
 
import { NgClassAttributeComponent } from './ng-class-attribute/ng-class-attribute.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
 
import { ParentComponent } from './parent/parent.component';
import { AssignOutputComponent } from './assign-output/assign-output.component';
import { DerevtivesAssignComponent } from './derevtives-assign/derevtives-assign.component';
import { AddRemoveAssignComponent } from './add-remove-assign/add-remove-assign.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { TemplateDrivenAssignComponent } from './template-driven-assign/template-driven-assign.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
 import { ValidationTemplateFormComponent } from './validation-template-form/validation-template-form.component';
import { ValidationTemplateForm2Component } from './validation-template-form2/validation-template-form2.component';
 import { TemplateForm3Component } from './template-form3/template-form3.component';
import { ReactiveformComponent } from './sir/reactiveform.component';
 
import { ReactiveTemplateAssignComponent } from './reactive-template-assign/reactive-template-assign.component';
import { ServiceComp1Component } from './service-comp1/service-comp1.component';
import { ServiceComp2Component } from './service-comp2/service-comp2.component';
 
 
 import {HttpClientModule } from  '@angular/common/http';
import { ReactProjectFormComponent } from './react-project-form/react-project-form.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
 
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CountPipe } from './count.pipe';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { AssignPipe1Pipe } from './pipes/assign-pipe1.pipe';
import { PipeAssign1Component } from './pipe-assign1/pipe-assign1.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
 
 
 

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
    
    AssignCustomDireDirective,
     
    NgClassAttributeComponent,
    ChildComponent,
    Child2Component,
    
    ParentComponent,
    AssignOutputComponent,
    DerevtivesAssignComponent,
    AddRemoveAssignComponent,
    LifeCycleHooksComponent,
    SimpleformComponent,
    TemplateDrivenAssignComponent,
    TemplateDrivenForm2Component,
    ValidationTemplateFormComponent,
    ValidationTemplateForm2Component,
    TemplateForm3Component,
    ReactiveformComponent,
    
    ReactiveTemplateAssignComponent,
    ServiceComp1Component,
    ServiceComp2Component,
    ReactProjectFormComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
     
    PipesDemoComponent,
    CountPipe,
    CompaComponent,
    CompbComponent,
    AssignPipe1Pipe,
    PipeAssign1Component,
    FilterPipeComponent,
    FilterPipePipe,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
