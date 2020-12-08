import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  // styleUrls: ['./curso-detalhe.component.css']
  styles:[    
    `.mudaCor{
      color:blue;
      background:gray;  }
    `
  ]
})
export class CursoDetalheComponent  {
  cursoAngular:boolean = true;
  Curtir(){
    return true
  }
  Paris:string = "https://catracalivre.com.br/wp-content/uploads/2018/08/istock-924894324.jpg"
  name:string = "Valmyr Lima"
  Roma:any = "https://www.viajoteca.com/wp-content/uploads/2020/01/Primeira-Vez-em-Roma-Vista-de-Roma-a-partir-de-Castel-SantAngelo.jpg"
  rock2you:string = "https://www.rock2you.com.br/categorias/calcados-femininos?filter_brands=262"
  getValor(){
    return 45 * 45
  }

  // AULA DE EVENTOS
  //   CLICK
 
  botaoClique(){
    console.log("Cliquei")
  }
      //  FORM

  valorAtual:string = ""
  
  nossoInput(event:KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>event.target).value;
  }

  valorEnter:string = "";
  
  SalvarValor(valor:string){
    this.valorEnter = valor;
  }

//PROPERTY BINDING

mudaStyle:boolean = false;

EntrouSaiu(){
 this.mudaStyle =  !this.mudaStyle;
}


}
