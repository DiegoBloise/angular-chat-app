import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import * as outlineIcons from '@ng-icons/mynaui/outline';
import * as solidIcons from '@ng-icons/mynaui/solid';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideIcons(outlineIcons), provideIcons(solidIcons)],
})
export class AppComponent {
  title = 'angular-projects';
}
