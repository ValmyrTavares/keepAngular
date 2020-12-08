import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();

  @Input() num:number = 0

  acresce(){
    this.num++;
    this.mudouValor.emit({novoValor:this.num})
  }

  decresce(){
    this.num--
    this.mudouValor.emit({novoValor:this.num})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
