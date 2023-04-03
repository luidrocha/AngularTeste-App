import { TestBed } from '@angular/core/testing';

import { MockDadosService } from './mock-dados';

describe('MockDadosService', () => {
  let service: MockDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
