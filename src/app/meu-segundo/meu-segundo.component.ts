import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-meu-segundo',
  templateUrl: './meu-segundo.component.html',
  styleUrls: ['./meu-segundo.component.css']
})
export class MeuSegundoComponent {
nome:string = "abc"
pessoa:any = {
  nome:"Eu",
  idade:10
}

}
