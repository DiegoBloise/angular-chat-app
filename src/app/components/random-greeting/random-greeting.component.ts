import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-greeting',
  imports: [],
  templateUrl: './random-greeting.component.html',
  styleUrl: './random-greeting.component.css',
})
export class RandomGreetingComponent implements OnInit {
  message!: {
    title: string;
    subtitle: string;
  };

  messages = [
    { title: 'Welcome to the Chat!', subtitle: 'We’re glad to have you here.' },
    {
      title: 'Let’s Start Chatting!',
      subtitle: 'Exciting conversations await.',
    },
    { title: 'Ready to Chat?', subtitle: 'Join the fun and meet new people.' },
    {
      title: 'Hello, New Friend!',
      subtitle: 'We’re here to chat and have fun together.',
    },
    { title: 'You’re In!', subtitle: 'Let the conversations begin!' },
    {
      title: 'Hey, Welcome!',
      subtitle: 'Get ready to connect with friends and more.',
    },
    {
      title: 'Great to See You!',
      subtitle: 'Start chatting and make new memories.',
    },
    {
      title: 'Let’s Get Social!',
      subtitle: 'Engage, share, and enjoy chatting!',
    },
    { title: 'Hi There!', subtitle: 'Let the good conversations roll!' },
    {
      title: 'It’s Chat Time!',
      subtitle: 'Let’s have some fun and talk away!',
    },
    {
      title: 'Welcome Back!',
      subtitle: 'We’re excited to chat with you again.',
    },
    { title: 'You’re Here!', subtitle: 'Let the conversations flow.' },
    { title: 'Say Hello!', subtitle: 'Start chatting with your friends.' },
    { title: 'Time to Chat!', subtitle: 'Let’s talk and share some moments.' },
    {
      title: 'Good to See You!',
      subtitle: 'Your friends are waiting to chat!',
    },
    { title: 'Let’s Begin!', subtitle: 'Start your chat journey now.' },
    {
      title: 'Hello Again!',
      subtitle: 'We’re ready to chat with you anytime.',
    },
    { title: 'Feeling Chatty?', subtitle: 'It’s time to connect and chat.' },
    {
      title: 'New Day, New Chats!',
      subtitle: 'Let’s get talking and have fun.',
    },
    {
      title: 'Chat Awaits!',
      subtitle: 'Let’s dive into some cool conversations.',
    },
    {
      title: 'Join the Conversation!',
      subtitle: 'There’s always something fun to talk about.',
    },
    {
      title: 'Your Friends Are Waiting!',
      subtitle: 'Get the chat started with them.',
    },
    {
      title: 'Welcome to Your New Chat Space!',
      subtitle: 'Where the fun begins.',
    },
    {
      title: 'Get Ready to Connect!',
      subtitle: 'Let’s chat and explore new topics.',
    },
    {
      title: 'It’s Chat O’Clock!',
      subtitle: 'Let’s start the conversation now.',
    },
    { title: 'Chatting Made Easy!', subtitle: 'Just click and start talking.' },
    {
      title: 'Your Chat Adventure Starts Here!',
      subtitle: 'Exciting conversations await you.',
    },
    { title: 'Let’s Talk!', subtitle: 'Start sharing and chatting today.' },
    {
      title: 'Welcome to Your New Community!',
      subtitle: 'Where all great conversations begin.',
    },
    {
      title: 'Time to Get Social!',
      subtitle: 'Let’s chat and connect with others.',
    },
    {
      title: 'The Chat Starts Now!',
      subtitle: 'Let’s begin your journey of conversations.',
    },
    {
      title: 'Ready to Meet New People?',
      subtitle: 'The conversation is just a click away.',
    },
    { title: 'Your Chat World Awaits!', subtitle: 'Time to get connected.' },
    {
      title: 'Let’s Make It Fun!',
      subtitle: 'Start chatting and meet new people.',
    },
    {
      title: 'Let’s Get to Know Each Other!',
      subtitle: 'Begin the conversation with your friends.',
    },
    {
      title: 'Get the Conversation Going!',
      subtitle: 'Start chatting and share your thoughts.',
    },
    { title: 'Join the Fun!', subtitle: 'Start chatting now and enjoy!' },
    {
      title: 'Let’s Start the Conversation!',
      subtitle: 'Exciting moments await in the chat.',
    },
    { title: 'Feeling Social?', subtitle: 'Come chat with us!' },
    {
      title: 'Hello, Hello!',
      subtitle: 'We’re here to chat and have a great time.',
    },
    { title: 'Your Chat Room is Waiting!', subtitle: 'Let the talking begin.' },
    {
      title: 'Start Connecting!',
      subtitle: 'Let’s make the most out of our time here.',
    },
    {
      title: 'The Conversation Starts Now!',
      subtitle: 'You’re just a click away.',
    },
    { title: 'It’s Your Time!', subtitle: 'Let’s chat and have a blast.' },
    { title: 'Join Us Now!', subtitle: 'The best chats await you.' },
    {
      title: 'Welcome Aboard!',
      subtitle: 'Get ready for some fun conversation.',
    },
    {
      title: 'Chatting Starts Here!',
      subtitle: 'Jump into your first conversation now.',
    },
    { title: 'New Adventures Await!', subtitle: 'Let’s start talking.' },
    { title: 'Make a New Friend!', subtitle: 'It’s all about connecting.' },
    { title: 'Chat Here!', subtitle: 'Where the magic happens.' },
    {
      title: 'A New Day, A New Chat!',
      subtitle: 'Let’s talk about something fun.',
    },
    { title: 'We’re Excited You’re Here!', subtitle: 'It’s time to chat.' },
    {
      title: 'Ready for Some Fun?',
      subtitle: 'Let’s chat and make new memories.',
    },
    {
      title: 'It’s Chat O’Clock!',
      subtitle: 'Start your conversation right now.',
    },
    {
      title: 'New Chat, New Connections!',
      subtitle: 'Let’s make this an amazing conversation.',
    },
    {
      title: 'The Chat Never Stops!',
      subtitle: 'Let’s talk and have a great time.',
    },
    {
      title: 'Come On In!',
      subtitle: 'Start chatting and exploring new topics.',
    },
  ];

  ngOnInit(): void {
    this.message =
      this.messages[Math.floor(Math.random() * this.messages.length) + 1];
  }
}
