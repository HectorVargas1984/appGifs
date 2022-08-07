import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponce, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'RxFZQObGXZq1CEebriLSCPH5eEwxVSfT';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultado: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // recortando hasta diez el arreglo
      this._historial = this._historial.slice(0, 10);
    }

    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGIFResponce>(`${this.servicioUrl}/search`, { params: params })
      .subscribe((resp) => {
        this.resultado = resp.data;

        localStorage.setItem('resultado', JSON.stringify(this.resultado));
      });
  }
}
