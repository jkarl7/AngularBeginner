import { TestBed } from '@angular/core/testing';

import { Module1serviceService } from './module1service.service';

describe('Module1serviceService', () => {
  let service: Module1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
