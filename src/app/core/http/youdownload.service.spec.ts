import { TestBed } from '@angular/core/testing';

import { YoudownloadService } from './youdownload.service';

describe('YoudownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoudownloadService = TestBed.get(YoudownloadService);
    expect(service).toBeTruthy();
  });
});
