import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarDomicilioComponent } from './gestionar-domicilio.component';

describe('GestionarDomicilioComponent', () => {
  let component: GestionarDomicilioComponent;
  let fixture: ComponentFixture<GestionarDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
