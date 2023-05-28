import { TestBed } from '@angular/core/testing';

import { DisponibilitateService } from './disponibilitate.service';

describe('DisponibilitateService', () => {
  let service: DisponibilitateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilitateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
