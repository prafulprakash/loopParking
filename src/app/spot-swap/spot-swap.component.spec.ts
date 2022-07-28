import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotSwapComponent } from './spot-swap.component';

describe('SpotSwapComponent', () => {
  let component: SpotSwapComponent;
  let fixture: ComponentFixture<SpotSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
