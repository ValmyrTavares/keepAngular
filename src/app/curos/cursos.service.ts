import { getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { 
  }
      getPaises(){
        return ["Italia","França","Belgica"]
  }
}
