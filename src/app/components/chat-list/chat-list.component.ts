import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { ChatCardComponent } from '../chat-card/chat-card.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  imports: [ChatCardComponent],
})
export class ChatListComponent implements OnInit {
  chats!: Chat[];

  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit(): void {
    this.chats = this.chatService
      .getChats()
      .sort(
        (a, b) => b.lastMessageDate.getTime() - a.lastMessageDate.getTime()
      );
  }

  navigateToChat(userId: string | undefined): void {
    this.router.navigate([`/chat/${userId}`]);
  }
}
