import { TestBed, inject } from '@angular/core/testing';

import { YcombinatorServiceService } from './ycombinator-service.service';

describe('YcombinatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YcombinatorServiceService]
    });
  });

  it('should be created', inject([YcombinatorServiceService], (service: YcombinatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
