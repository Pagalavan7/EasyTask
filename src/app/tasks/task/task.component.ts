import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() selectedUserTask!: Task;

  @Output() completedTask = new EventEmitter<string>();

  onCompleteTask(completedTaskId: string) {
    this.completedTask.emit(completedTaskId);
  }
}
