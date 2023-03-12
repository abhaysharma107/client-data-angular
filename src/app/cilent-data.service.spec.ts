import { TestBed } from '@angular/core/testing';

import { CilentDataService } from './cilent-data.service';

describe('CilentDataService', () => {
  let service: CilentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CilentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
