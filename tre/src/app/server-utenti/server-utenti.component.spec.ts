import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUtentiComponent } from './server-utenti.component';

describe('ServerUtentiComponent', () => {
  let component: ServerUtentiComponent;
  let fixture: ComponentFixture<ServerUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
