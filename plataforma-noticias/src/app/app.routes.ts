import { Routes } from '@angular/router';

import { ListarNoticiaComponent } from "./noticia/listar-noticia/listar-noticia.component";
import { ListarNoticiaFavoritoComponent } from "./noticia/listar-noticia-favorito/listar-noticia-favorito.component";

//export const routes: Routes = [];

export const routes: Routes = [
    { path: '', component: ListarNoticiaComponent },
    { path: 'inicio', component: ListarNoticiaComponent },
    { path: 'ver-noticias', component: ListarNoticiaComponent },
    { path: 'ver-favoritos', component: ListarNoticiaFavoritoComponent }
  ]; 