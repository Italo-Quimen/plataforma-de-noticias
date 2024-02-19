package com.imqh.api.noticias.favoritos.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.imqh.api.noticias.favoritos.models.entity.Noticia;

public interface INoticiaDao extends CrudRepository<Noticia, Long> {
	
	List<Noticia> findByTituloContainingIgnoreCase(String titulo);

}
