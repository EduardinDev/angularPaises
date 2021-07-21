import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayerror : boolean = false;
  paises : Country[] =[];
  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayerror=false;
    this.paisService.buscarPais(this.termino).
    subscribe(
      (paises)=>{  
        console.log(paises);
        this.paises = paises;
      },
      
      (error)=>{
        this.hayerror=true;
        this.paises=[];
      });
  }

}
