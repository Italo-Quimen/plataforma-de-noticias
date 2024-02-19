import { TestBed } from '@angular/core/testing';

import { NoticiaFavoritoService } from './noticia-favorito.service';

describe('NoticiaFavoritoService', () => {
  let service: NoticiaFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
