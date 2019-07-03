import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreServiceComponent } from './book-store-service.component';

describe('BookStoreServiceComponent', () => {
  let component: BookStoreServiceComponent;
  let fixture: ComponentFixture<BookStoreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStoreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
