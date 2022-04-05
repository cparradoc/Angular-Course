import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla',
    'persone' : 'invitarlx'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Marcial', 'Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.' ,
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if(this.nombre === 'Fernando') {
      this.nombre = 'Marcela';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    if(this.clientes.length > 0) {
      this.clientes.pop();
    }
  }

  //keyValue
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

}
