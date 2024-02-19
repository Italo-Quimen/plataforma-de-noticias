export class NoticiaFavorito {
  id: bigint;
  titulo: string;
  resumen: string;
  fechaPublicacion: string;
  fechaNoticiaAgregadaFavorito;

  constructor(data: any) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.resumen = data.resumen;
    this.fechaPublicacion = data.fechaPublicacion;
    this.fechaNoticiaAgregadaFavorito = data.fechaNoticiaAgregadaFavorito;
  }
   
}
