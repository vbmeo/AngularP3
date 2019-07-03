import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributiComponent } from './attributi.component';

describe('AttributiComponent', () => {
  let component: AttributiComponent;
  let fixture: ComponentFixture<AttributiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
