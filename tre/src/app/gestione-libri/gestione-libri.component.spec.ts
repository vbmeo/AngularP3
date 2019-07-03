import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneLibriComponent } from './gestione-libri.component';

describe('GestioneLibriComponent', () => {
  let component: GestioneLibriComponent;
  let fixture: ComponentFixture<GestioneLibriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneLibriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneLibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
