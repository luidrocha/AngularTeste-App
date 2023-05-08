import { Injectable } from '@angular/core';
import { Cliente } from './Cliente';
import { CLIENTES } from './mock-dados';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {

  constructor() {}

  getClientes(): Observable<Cliente[]> {

    const clientes= of(CLIENTES);

    return clientes;


  }

  getDate(){
    // x=x+1
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  }

}
