import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { userDetails } from './userDetails';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/user';

const randomUser = Math.floor(Math.random() * userDetails.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) id!: string;

  // name = input.required<string>();
  // avatar = input.required<string>(); it is a signal

  @Output() select = new EventEmitter<User>();
  // select = output<string>(); //it is not a signal

  // imagePath = computed(() => '../assets/' + this.avatar());

  get imagePath() {
    return '../assets/' + this.avatar;
  }

  onSelectUser() {
    const selectedUser: User = {
      name: this.name,
      avatar: this.avatar,
      id: this.id,
    };
    console.log(selectedUser);
    this.select.emit(selectedUser);
  }
}
