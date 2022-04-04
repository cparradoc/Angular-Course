import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { } //para suscribirnos a cualquier cambio de la url

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.paisService.getPaisPorId(id)
        .subscribe(pais => {

        });
    });
  }

}
