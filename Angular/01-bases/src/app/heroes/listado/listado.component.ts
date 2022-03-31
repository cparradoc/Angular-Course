import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  eliminado: string= '';

  borrarHeroe(){
    if(this.heroes.length > 0){
      this.eliminado = this.heroes.pop() || '';
    }
  }

}
