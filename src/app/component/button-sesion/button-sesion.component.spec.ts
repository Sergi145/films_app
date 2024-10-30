import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSesionComponent } from './button-sesion.component';

describe('ButtonSesionComponent', () => {
  let component: ButtonSesionComponent;
  let fixture: ComponentFixture<ButtonSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
