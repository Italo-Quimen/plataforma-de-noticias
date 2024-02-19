export class Noticia {

  id: number;
  titulo: string;
  resumen: string;
  fechaPublicacion: string;

  constructor(data: any) {
    this.id = data.id;
    this.titulo = data.title;
    this.resumen = data.summary;
    this.fechaPublicacion = data.published_at;
  }
  
}
