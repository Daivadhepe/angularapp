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
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { NgClassAttributeComponent } from './ng-class-attribute/ng-class-attribute.component';

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
    CustomDirectiveComponent,
    NgClassAttributeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
