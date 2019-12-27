import { TestBed } from '@angular/core/testing';

import { RedComponentsService } from './red-components.service';

describe('RedComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedComponentsService = TestBed.get(RedComponentsService);
    expect(service).toBeTruthy();
  });
});
