import { TestBed, inject } from '@angular/core/testing';

import { YcombinatorService } from './ycombinator.service';

describe('YcombinatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YcombinatorService]
    });
  });

  it('should be created', inject([YcombinatorService], (service: YcombinatorService) => {
    expect(service).toBeTruthy();
  }));
});
