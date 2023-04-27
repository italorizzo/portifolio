import { TestBed } from '@angular/core/testing';

import { BdcommentsService } from './bdcomments.service';

describe('BdcommentsService', () => {
  let service: BdcommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdcommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
