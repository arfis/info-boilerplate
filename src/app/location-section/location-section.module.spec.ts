import { LocationSectionModule } from './location-section.module';

describe('LocationSectionModule', () => {
  let locationSectionModule: LocationSectionModule;

  beforeEach(() => {
    locationSectionModule = new LocationSectionModule();
  });

  it('should create an instance', () => {
    expect(locationSectionModule).toBeTruthy();
  });
});
