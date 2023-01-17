import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
checkUserNameAndPassword(userName:string,pass:string){
  if(userName == 'admin' && pass=='admin123'){
    localStorage.setItem('userName','admin');
    
 
    return true;
  }
  else{
    
    return false;
  }
}


}
