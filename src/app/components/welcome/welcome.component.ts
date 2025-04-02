import { Component } from '@angular/core';
import { RandomEmojiComponent } from '../random-emoji/random-emoji.component';
import { RandomGreetingComponent } from '../random-greeting/random-greeting.component';

@Component({
  selector: 'app-welcome',
  imports: [RandomEmojiComponent, RandomGreetingComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
