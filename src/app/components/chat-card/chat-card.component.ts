import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { format, isThisWeek, isThisYear, isToday } from 'date-fns';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { Tag } from 'primeng/tag';
import { Chat } from '../../models/chat.model';
@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss'],
  imports: [CommonModule, Tag, Ripple, ButtonModule],
})
export class ChatCardComponent {
  @Input() chat!: Chat;
  @Output() handleChatPress: EventEmitter<void> = new EventEmitter();

  lastMessageDateFormatted: string = '';

  ngOnInit() {
    this.lastMessageDateFormatted = this.formatMessageDate(
      this.chat.lastMessageDate
    );
  }

  formatMessageDate(dateMessage: Date): string {
    if (isToday(dateMessage)) {
      return format(dateMessage, 'HH:mm');
    } else if (isThisWeek(dateMessage, { weekStartsOn: 0 })) {
      return format(dateMessage, 'EEE');
    } else if (isThisYear(dateMessage)) {
      return format(dateMessage, 'MMM dd');
    }
    return format(dateMessage, 'dd/MM/yyyy');
  }

  onChatPress() {
    this.handleChatPress.emit();
  }
}
