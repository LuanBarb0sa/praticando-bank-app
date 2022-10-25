import { Transferencia } from './../../models/transferencias.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private  listaTransferencia: any[];
private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
}

get transferencias(){
  return this.listaTransferencia;
}

todasTransferencias(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionarTransferencia(transferencia:  Transferencia): Observable<Transferencia> {
  this.hitradar(transferencia);

 return  this.httpClient.post<Transferencia>(this.url, transferencia);
}

private hitradar(transferencia: any){
  transferencia.data = new Date();
}

}
