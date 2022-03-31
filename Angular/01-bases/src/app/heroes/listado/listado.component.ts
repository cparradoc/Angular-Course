import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  eliminado: string= '';

  borrarHeroe(){
      this.eliminado = this.heroes.pop() || '';
  }

}
