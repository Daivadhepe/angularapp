import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  saveUser(user){
    console.log('user save', user);
  }
}
