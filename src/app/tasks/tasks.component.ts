import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../../Models/user';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTask } from '../../Models/newTask.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUser?: User;

  addTaskFormOpen: boolean = false;

  tasksList = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  onCompleteTask(completedTaskId: string) {
    this.tasksList = this.tasksList.filter((x) => x.id != completedTaskId);
  }

  get selectedUserTasks() {
    return this.tasksList.filter((x) => x.userId == this.selectedUser?.id);
  }

  addATask() {
    this.addTaskFormOpen = true;
  }
  closeTaskForm() {
    this.addTaskFormOpen = false;
  }
  addNewTask(newTask: NewTask) {
    let newTaskDetail = {
      id: 't3',
      userId: this.selectedUser!.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask['due-date'],
    };

    this.tasksList.push(newTaskDetail);

    this.addTaskFormOpen = false;
  }
}
