import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chat!: Chat | undefined;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.chat = this.chatService.getChatById(params['userId']);
    });
  }
}
