import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { ChatCardComponent } from '../chat-card/chat-card.component';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  imports: [ChatCardComponent, TabsModule, CommonModule],
})
export class ChatListComponent implements OnInit {
  chats!: Chat[];
  tabs: { title: string; value: number; chats: Chat[] }[] = [];

  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit(): void {
    this.chats = this.chatService
      .getChats()
      .sort(
        (a, b) => b.lastMessageDate.getTime() - a.lastMessageDate.getTime()
      );

    this.tabs = [
      { title: 'All', value: 0, chats: this.chats },
      { title: 'Unread', value: 1, chats: this.chats },
      { title: 'Personal', value: 3, chats: this.chats },
      { title: 'Family', value: 4, chats: this.chats },
      { title: 'Friends', value: 4, chats: this.chats },
      { title: 'Work', value: 5, chats: this.chats },
      { title: 'Bots', value: 6, chats: this.chats },
    ];
  }

  navigateToChat(userId: string | undefined): void {
    this.router.navigate([`/chat/${userId}`]);
  }
}
