import { Injectable } from '@angular/core';
import {   ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<AddUserComponent>{
canDeactivate(component:AddUserComponent){
  if(component.userName.dirty){
    return window.confirm('you have unsaved changes . are you sure want to navigate');
  }
  else{
    return true;
  }
}
}
