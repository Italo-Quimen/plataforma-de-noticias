import { Component } from '@angular/core';

import { NoticiaFavorito } from "../noticia-favorito";
import { NoticiaFavoritoService } from "../noticia-favorito.service";

import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { FormsModule } from '@angular/forms';

import swal from "sweetalert2";

@Component({
  selector: 'app-listar-noticia-favorito',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './listar-noticia-favorito.component.html',
  styleUrl: './listar-noticia-favorito.component.css'
})
export class ListarNoticiaFavoritoComponent {
  noticiaFavorito: NoticiaFavorito[];

  pageActual: number = 1;

  tituloBusqueda: string = "";

  constructor(private noticiaFavoritoService: NoticiaFavoritoService) {
    this.noticiaFavorito = [];
  }

  ngOnInit():void {
    this.noticiaFavoritoService.listarNoticiaFavorito().subscribe((data: any) => {
        this.noticiaFavorito = data.map((noticiaFavorito: any) => {
          return new NoticiaFavorito({
            id: noticiaFavorito.id,
            titulo: noticiaFavorito.titulo,
            resumen: noticiaFavorito.resumen,
            fechaPublicacion: noticiaFavorito.fechaPublicacion,
            fechaNoticiaAgregadaFavorito: noticiaFavorito.fechaNoticiaAgregadaFavorito
          });
        });
      });
  }

  delete(noticiaFavorito: NoticiaFavorito): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: `¿Seguro que decea eliminar ${noticiaFavorito.titulo}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          console.log(noticiaFavorito.id);
          this.noticiaFavoritoService.eliminarNoticiaFavorito(noticiaFavorito.id).subscribe(response => {
            this.noticiaFavorito = this.noticiaFavorito.filter(cli => cli !== noticiaFavorito);

            swalWithBootstrapButtons.fire(
              "Noticia favorito eliminado!",
              `Noticia favorito ${noticiaFavorito.titulo} eliminado con éxito`,
              "success"
            );
          });
        }
      });
  }

  buscar(): void {
    this.noticiaFavoritoService.buscarNoticiaFavoritoPorTitulo(this.tituloBusqueda).subscribe((data: any) => {
      this.noticiaFavorito = data;
    });
  }
}
