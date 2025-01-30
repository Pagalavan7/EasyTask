import { Component, computed, signal } from '@angular/core';
import { userDetails } from './userDetails';
import { CommonModule } from '@angular/common';

const randomUser = Math.floor(Math.random() * userDetails.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = signal(userDetails[randomUser]);
  imagePath = computed(() => '../assets/' + this.user().avatar);

  onButtonClick(name: string) {
    const randomUser = Math.floor(Math.random() * userDetails.length);
    this.user.set(userDetails[randomUser]);
  }
}
