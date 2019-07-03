import { TestBed, inject } from '@angular/core/testing';

import { ProvaserviziomacroService } from './provaserviziomacro.service';

describe('ProvaserviziomacroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvaserviziomacroService]
    });
  });

  it('should be created', inject([ProvaserviziomacroService], (service: ProvaserviziomacroService) => {
    expect(service).toBeTruthy();
  }));
});
