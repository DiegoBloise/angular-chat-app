import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatListComponent } from "./components/chat-list/chat-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-projects';
}
