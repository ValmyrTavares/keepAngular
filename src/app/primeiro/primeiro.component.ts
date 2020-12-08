import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lux',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  MeuNome:string = "Valmyr Tavares Malta de Lima"
  newNumb:any = 12
  showNumber:number = 0  
  onMudouValor(evento:any){
   this.showNumber  = evento.novoValor ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
