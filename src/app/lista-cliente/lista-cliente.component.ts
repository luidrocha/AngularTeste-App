import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServiceService } from '../cliente-service.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  constructor(private clienteService : ClienteServiceService) {}

clientes: Cliente[] = [];

ngOnInit(): void {
    this.getClientes();
  }

  getClientes()  {
    this.clienteService.getClientes().subscribe(
      clienteResult => this.clientes = clienteResult);

    }
  }
