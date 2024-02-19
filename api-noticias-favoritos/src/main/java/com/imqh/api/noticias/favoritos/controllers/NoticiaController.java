package com.imqh.api.noticias.favoritos.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.imqh.api.noticias.favoritos.models.entity.Noticia;
import com.imqh.api.noticias.favoritos.models.services.INoticiaService;

import jakarta.validation.Valid;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api/noticias/favoritos")
public class NoticiaController {
	
	@Autowired
	private INoticiaService noticiaService;
	
	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Noticia noticia, BindingResult result) {
		LocalDate fechaActual = LocalDate.now();
		String fechaFormateada = fechaActual.format(DateTimeFormatter.ofPattern("dd MMM yyyy"));
	    noticia.setFechaNoticiaAgregadaFavorito(fechaFormateada);
		
		if (result.hasFieldErrors()) {
			return validation(result);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(noticiaService.save(noticia));
	}
	
	@GetMapping
	public List<Noticia> list() {
		return noticiaService.findAll();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		Optional<Noticia> noticiaOptional = noticiaService.delete(id);
		if (noticiaOptional.isPresent()) {
			return ResponseEntity.ok(noticiaOptional.orElseThrow());
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{titulo}")
	public List<Noticia> findByTitulo(@PathVariable("titulo") String titulo) {
	  return noticiaService.findByTitulo(titulo);
	}

	private ResponseEntity<?> validation(BindingResult result) {
		Map<String, String> errors = new HashMap<>();

		result.getFieldErrors().forEach(err -> {
			errors.put("Mensaje", "El campo " + err.getField() + " " + err.getDefaultMessage());
		});
		return ResponseEntity.badRequest().body(errors);
	}
	
}
