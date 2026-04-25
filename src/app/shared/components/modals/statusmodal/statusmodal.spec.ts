import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statusmodal } from './statusmodal';

describe('Statusmodal', () => {
  let component: Statusmodal;
  let fixture: ComponentFixture<Statusmodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statusmodal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statusmodal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
