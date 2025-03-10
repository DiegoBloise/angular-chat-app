import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: 'chat/:userId', component: ChatComponent },
];
