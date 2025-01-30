import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { userDetails } from './user/userDetails';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userDetails = userDetails;
  name: string = '';

  onSelectUser(name: string) {
    this.name = name;
  }
}
