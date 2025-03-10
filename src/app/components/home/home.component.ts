import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChatListComponent } from '../chat-list/chat-list.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, ChatListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  @HostListener('window:keydown.escape', ['$event']) handleKeyDown(
    event: KeyboardEvent
  ) {
    this.router.navigate([``]);
  }
}
