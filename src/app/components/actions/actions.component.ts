import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-actions',
  imports: [
    NgIcon,
    Menu,
    ButtonModule,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    AvatarModule,
    Ripple,
    RouterLink,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css',
})
export class ActionsComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Contacts',
        icon: 'mynaUsers',
        route: '/contacts',
      },
      {
        label: 'Settings',
        icon: 'mynaCogFour',
        route: '/settings',
      },
      {
        label: 'Logout',
        icon: 'mynaLogout',
        route: '#',
      },
    ];
  }
}
