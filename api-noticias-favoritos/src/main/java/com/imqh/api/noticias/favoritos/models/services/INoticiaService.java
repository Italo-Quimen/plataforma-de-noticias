package com.imqh.api.noticias.favoritos.models.services;

import java.util.List;
import java.util.Optional;

import com.imqh.api.noticias.favoritos.models.entity.Noticia;

public interface INoticiaService {

	List<Noticia> findAll();

	Noticia save(Noticia noticia);
	
	Optional<Noticia> delete(Long id);
	
	List<Noticia> findByTitulo(String titulo);

}
