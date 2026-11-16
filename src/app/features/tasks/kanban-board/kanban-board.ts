
import { Component } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../core/services/task';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard {

  constructor(private taskService: TaskService) {}

  get tasks(): Task[] {
    return this.taskService.tasks();
  }

  getTasks(status: Task['status']): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  changeStatus(id: number, status: Task['status']) {
    this.taskService.changeStatus(id, status);
  }
}
