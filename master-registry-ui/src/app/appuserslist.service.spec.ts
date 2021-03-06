import { TestBed } from '@angular/core/testing';

import { AppuserslistService } from './appuserslist.service';

describe('AppuserslistService', () => {
  let service: AppuserslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppuserslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
