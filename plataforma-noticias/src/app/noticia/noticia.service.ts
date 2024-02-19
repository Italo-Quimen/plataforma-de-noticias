import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Noticia } from "./noticia";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private URL_API: string = "https://api.spaceflightnewsapi.net/v4/articles/";

  constructor(private http: HttpClient) {
    console.log("Servicio cliente funcionando");
  }

  listarNoticia(): Observable<Noticia[]> {
    return this.http.get(this.URL_API).pipe(map(data => data as Noticia[]));
  }

}
