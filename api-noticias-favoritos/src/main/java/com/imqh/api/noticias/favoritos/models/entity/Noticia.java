package com.imqh.api.noticias.favoritos.models.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "noticias")
public class Noticia implements Serializable {

	private static final long serialVersionUID = 8507453399124761050L;

	@Id
	private Long id;
	private String titulo;
	private String resumen;
	private String fechaPublicacion;
	private String fechaNoticiaAgregadaFavorito;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getResumen() {
		return resumen;
	}

	public void setResumen(String resumen) {
		this.resumen = resumen;
	}

	public String getFechaPublicacion() {
		return fechaPublicacion;
	}

	public void setFechaPublicacion(String fechaPublicacion) {
		this.fechaPublicacion = fechaPublicacion;
	}

	public String getFechaNoticiaAgregadaFavorito() {
		return fechaNoticiaAgregadaFavorito;
	}

	public void setFechaNoticiaAgregadaFavorito(String fechaNoticiaAgregadaFavorito) {
		this.fechaNoticiaAgregadaFavorito = fechaNoticiaAgregadaFavorito;
	}

}
