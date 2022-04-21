import { TestBed } from '@angular/core/testing';

import { HttpstatusService } from './httpstatus.service';

describe('HttpstatusService', () => {
  let service: HttpstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
