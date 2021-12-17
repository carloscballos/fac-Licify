import { TestBed } from '@angular/core/testing';

import { InfoFacturaService } from './info-factura.service';

describe('InfoFacturaService', () => {
  let service: InfoFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
