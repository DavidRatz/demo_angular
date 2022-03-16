import { TestBed } from '@angular/core/testing';

import { ColorswapService } from './colorswap.service';

describe('ColorswapService', () => {
  let service: ColorswapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorswapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
