import { TestBed } from '@angular/core/testing';

import { AjouteArticleService } from './ajoute-article-service';

describe('AjouteArticleService', () => {
  let service: AjouteArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouteArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
