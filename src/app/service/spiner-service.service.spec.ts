import { TestBed } from '@angular/core/testing';

import { SpinerServiceService } from './spiner-service.service';

describe('SpinerServiceService', () => {
  let service: SpinerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
