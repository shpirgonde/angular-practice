import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roughwork } from './roughwork';

describe('Roughwork', () => {
  let component: Roughwork;
  let fixture: ComponentFixture<Roughwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roughwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roughwork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
