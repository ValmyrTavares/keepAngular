import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css'],
  inputs:['nome']
})
export class SegundoComponent implements OnInit {

   nome:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
