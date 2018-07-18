import { TestBed, inject } from '@angular/core/testing';

import { WebSoketService } from './web-soket.service';

describe('WebSoketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSoketService]
    });
  });

  it('should be created', inject([WebSoketService], (service: WebSoketService) => {
    expect(service).toBeTruthy();
  }));
});
