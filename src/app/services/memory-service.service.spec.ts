import { TestBed } from '@angular/core/testing';

import { MemoryServiceService } from './memory-service.service';

describe('MemoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryServiceService = TestBed.get(MemoryServiceService);
    expect(service).toBeTruthy();
  });
});
