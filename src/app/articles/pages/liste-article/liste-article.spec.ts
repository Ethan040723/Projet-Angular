import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticle } from './liste-article';

describe('ListeArticle', () => {
  let component: ListeArticle;
  let fixture: ComponentFixture<ListeArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
