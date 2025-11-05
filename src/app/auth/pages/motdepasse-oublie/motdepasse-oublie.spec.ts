import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepasseOublie } from './motdepasse-oublie';

describe('MotdepasseOublie', () => {
  let component: MotdepasseOublie;
  let fixture: ComponentFixture<MotdepasseOublie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotdepasseOublie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotdepasseOublie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
