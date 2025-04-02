import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGreetingComponent } from './random-greeting.component';

describe('RandomGreetingComponent', () => {
  let component: RandomGreetingComponent;
  let fixture: ComponentFixture<RandomGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomGreetingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
