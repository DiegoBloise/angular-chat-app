import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomEmojiComponent } from './random-emoji.component';

describe('RandomEmojiComponent', () => {
  let component: RandomEmojiComponent;
  let fixture: ComponentFixture<RandomEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomEmojiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
