import { Transferencia } from './../../models/transferencias.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { transformAll } from "@angular/compiler/src/render3/r3_ast";
import { Component, EventEmitter, Output } from "@angular/core";



@Component ({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {


  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  constructor(private service: TransferenciaService) {}

  transferir(){
    console.log('Nova Transferência Solicitada');

    const valorEmitir: Transferencia = {
      valor: this.valor,
       destino: this.destino,
      };

    this.service.adicionarTransferencia(valorEmitir)
    .subscribe(resultado => {
      console.log(resultado);
      this.cleanCampos();
    },
    (error) => console.error(error)
    );
  }

  cleanCampos() {
    this.destino = null;
    this.valor = null;
  }
}
