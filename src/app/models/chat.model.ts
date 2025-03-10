export interface Chat {
  id?: string;
  title: string;
  image: string;
  lastMessage: string;
  lastMessageDate: Date;
  unreadMessagesCounter: number;
}
