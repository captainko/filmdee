import { TestBed } from '@angular/core/testing';

import { GetSlideListService } from './get-slide-list.service';

describe('GetSlideListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSlideListService = TestBed.get(GetSlideListService);
    expect(service).toBeTruthy();
  });
});
