import { Component } from '@angular/core';

import { Noticia } from "../noticia";
import { NoticiaService } from "../noticia.service";
import { NoticiaFavoritoService } from "../noticia-favorito.service";
import { Router } from "@angular/router";

import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { DatePipe } from '@angular/common';

import swal from "sweetalert2";

@Component({
  selector: 'app-listar-noticia',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './listar-noticia.component.html',
  styleUrl: './listar-noticia.component.css'
})
export class ListarNoticiaComponent {

  noticias: Noticia[];

  pageActual: number = 1;

  constructor(private router: Router,
    private noticiaService: NoticiaService, 
    private noticiaFavoritoService: NoticiaFavoritoService,
    private datePipe: DatePipe) {
    this.noticias = [];
  }

  ngOnInit():void {
      this.noticiaService.listarNoticia().subscribe((data: any) => {
          this.noticias = data.results.map((noticia: any) => {
            return new Noticia({
              id: noticia.id,
              title: noticia.title,
              summary: noticia.summary,
              published_at: this.datePipe.transform(noticia.published_at, 'dd MMM yyyy'),
            });
          });
        });
    }
    
    guardarFavorito (noticia: Noticia) {      
      this.noticiaFavoritoService.guardarNoticiaFavorito(noticia).subscribe(() => {
        console.log("Se guardo la noticia favorito");
        swal.fire(
          "Nueva noticia",
          `Noticia ${noticia.titulo} guardada a favorito con éxito`,
          "success"
        );
  
      }, (error) => {
        console.log("Se produjo un error"+error.message);
      });
    }
}
