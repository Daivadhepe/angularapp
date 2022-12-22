import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employeee } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
emp = new Employeee;

userName = new BehaviorSubject<any>('Daiva');
  constructor() { }
}
