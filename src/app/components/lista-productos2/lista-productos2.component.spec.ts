import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductos2Component } from './lista-productos2.component';

describe('ListaProductos2Component', () => {
  let component: ListaProductos2Component;
  let fixture: ComponentFixture<ListaProductos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
