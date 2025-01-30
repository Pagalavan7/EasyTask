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
  // name = input.required<string>();
  // avatar = input.required<string>(); it is a signal

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); //it is not a signal

  // imagePath = computed(() => '../assets/' + this.avatar());

  get imagePath() {
    return '../assets/' + this.avatar;
  }

  onSelectUser(name: string) {
    this.select.emit(name);
  }
}
