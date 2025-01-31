import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTask } from '../../../Models/newTask.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  newTaskDetails!: NewTask;
  @Output() closeNewTaskForm = new EventEmitter<boolean>();
  @Output() newTask = new EventEmitter<NewTask>();
  @ViewChild('addTaskForm') addTaskForm!: NgForm;

  onSubmitAddTaskForm() {
    this.newTaskDetails = {
      title: this.addTaskForm.controls['title'].value,
      summary: this.addTaskForm.controls['summary'].value,
      'due-date': this.addTaskForm.controls['due-date'].value,
    };
    console.log(this.newTaskDetails);
    this.newTask.emit(this.newTaskDetails);
  }

  onCancelNewTask() {
    this.closeNewTaskForm.emit();
  }
}
