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

  //i18nPlurak
  clientes: string[] = ['Maaria', 'Pedro', 'Juan', 'Marcial', 'Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.' ,
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

}
