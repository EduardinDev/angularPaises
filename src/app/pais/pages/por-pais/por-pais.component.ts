import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = 'Hola mundo';
  hayerror : boolean = false;
  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayerror=false;
    this.paisService.buscarPais(this.termino).
    subscribe(
      (resp)=>{  
        console.log(resp);
      },
      (error)=>{
        this.hayerror=true;
      });
  }

}
