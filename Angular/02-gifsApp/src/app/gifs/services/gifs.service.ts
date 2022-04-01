import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'HzZJzibBYD6HghT76tBhbtjCFBO6IY29';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifs(query: string) {

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((response: any) => {
        console.log(response.data);
        this.resultados = response.data;
      })


  }
  
}
