import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiaFavoritoComponent } from './listar-noticia-favorito.component';

describe('ListarNoticiaFavoritoComponent', () => {
  let component: ListarNoticiaFavoritoComponent;
  let fixture: ComponentFixture<ListarNoticiaFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarNoticiaFavoritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarNoticiaFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
