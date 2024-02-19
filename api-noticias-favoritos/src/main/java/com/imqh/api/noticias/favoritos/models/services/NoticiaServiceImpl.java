package com.imqh.api.noticias.favoritos.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.imqh.api.noticias.favoritos.models.dao.INoticiaDao;
import com.imqh.api.noticias.favoritos.models.entity.Noticia;

@Service
public class NoticiaServiceImpl implements INoticiaService {

	@Autowired
	private INoticiaDao noticiaDao;

	@Transactional(readOnly = true)
	@Override
	public List<Noticia> findAll() {
		return (List<Noticia>) noticiaDao.findAll();
	}

	@Override
	@Transactional
	public Noticia save(Noticia noticia) {
		return noticiaDao.save(noticia);
	}
	
	@Transactional
    @Override
    public Optional<Noticia> delete(Long id) {
        Optional<Noticia> noticiaOptional = noticiaDao.findById(id);
        noticiaOptional.ifPresent(noticiaDb -> {
        	noticiaDao.delete(noticiaDb);
        });
        return noticiaOptional;
    }
	
	@Override
	public List<Noticia> findByTitulo(String titulo) {
		return noticiaDao.findByTituloContainingIgnoreCase(titulo);
	}
	
}
