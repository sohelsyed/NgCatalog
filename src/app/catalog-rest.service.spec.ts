import { TestBed, inject } from '@angular/core/testing';

import { CatalogRestService } from './catalog-rest.service';

describe('CatalogRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogRestService]
    });
  });

  it('should be created', inject([CatalogRestService], (service: CatalogRestService) => {
    expect(service).toBeTruthy();
  }));
});
