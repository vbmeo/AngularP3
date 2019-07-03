import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoneUtentiComponent } from './gestone-utenti.component';

describe('GestoneUtentiComponent', () => {
  let component: GestoneUtentiComponent;
  let fixture: ComponentFixture<GestoneUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoneUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoneUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
