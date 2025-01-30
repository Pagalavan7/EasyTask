import { Component, computed, Input, signal } from '@angular/core';
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
  @Input() name!: string;
  @Input() avatar!: string;

  get imagePath() {
    return '../assets/' + this.avatar;
  }

  onSelectUser(name: string) {}
}
