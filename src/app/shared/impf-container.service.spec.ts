import { TestBed } from '@angular/core/testing';

import { ImpfContainerService } from './impf-container.service';

describe('ImpfContainerService', () => {
  let service: ImpfContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpfContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
