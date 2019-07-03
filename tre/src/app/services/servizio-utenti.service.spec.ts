import { TestBed, inject } from '@angular/core/testing';

import { ServizioUtentiService } from './servizio-utenti.service';

describe('ServizioUtentiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServizioUtentiService]
    });
  });

  it('should be created', inject([ServizioUtentiService], (service: ServizioUtentiService) => {
    expect(service).toBeTruthy();
  }));
});
