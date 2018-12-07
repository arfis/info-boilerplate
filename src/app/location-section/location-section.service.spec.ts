import { TestBed, inject } from '@angular/core/testing';

import { LocationSectionService } from './location-section.service';

describe('LocationSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationSectionService]
    });
  });

  it('should be created', inject([LocationSectionService], (service: LocationSectionService) => {
    expect(service).toBeTruthy();
  }));
});
