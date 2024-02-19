import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Noticia } from "./noticia";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { NoticiaFavorito } from "./noticia-favorito";

@Injectable({
  providedIn: 'root'
})
export class NoticiaFavoritoService {
  private URL_API: string = "http://localhost:8081/api/noticias/favoritos";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {
    console.log("Servicio cliente funcionando");
  }

  guardarNoticiaFavorito(noticia: Noticia): Observable<Noticia> {
    console.log('Noticia recibida:', noticia);
    return this.http.post<Noticia>(this.URL_API, noticia, {
      headers: this.httpHeaders
    });
  }

  listarNoticiaFavorito(): Observable<Noticia[]> {
    return this.http.get(this.URL_API).pipe(map(data => data as Noticia[]));
  }

  eliminarNoticiaFavorito(id: bigint): Observable<NoticiaFavorito> {
    return this.http.delete<NoticiaFavorito>(`${this.URL_API}/${id}`, {
      headers: this.httpHeaders
    });
  }

  buscarNoticiaFavoritoPorTitulo(titulo: string): Observable<NoticiaFavorito> {
    return this.http.get<NoticiaFavorito>(`${this.URL_API}/${titulo}`, {
      headers: this.httpHeaders
    });
  }
}
