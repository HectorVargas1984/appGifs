import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  constructor(private gifsservice: GifsService) {}

  get resultado() {
    return this.gifsservice.resultado;
  }

  ngOnInit(): void {}
}
