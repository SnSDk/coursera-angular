import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinocancionComponent } from './destino-cancion.component';

describe('DestinocancionComponent', () => {
  let component: DestinocancionComponent;
  let fixture: ComponentFixture<DestinocancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinocancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinocancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
