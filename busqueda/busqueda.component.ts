import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  // forma de busacr el valor desde el html
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // indico que no se puedan ingresar valores vacios
    if (valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
