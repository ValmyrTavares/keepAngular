import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {CursosService} from '../curos/cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 name:string;
 paises:string[] = ["Italia","França","Belgica"]
 
  constructor(private CursosService: CursosService){
    this.name = "Valmyr Tavares"
    this.paises = CursosService.getPaises()
 }

 ngOnInit(){

 }
}
