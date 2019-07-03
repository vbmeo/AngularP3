import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsservabileComponent } from './osservabile.component';

describe('OsservabileComponent', () => {
  let component: OsservabileComponent;
  let fixture: ComponentFixture<OsservabileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsservabileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsservabileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
