
import { Injectable, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = signal<Task[]>([
    {
      id: 1,
      title: 'Design Homepage',
      description: 'Create homepage UI design',
      projectId: 1,
      assignedTo: 'Shreyash',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2026-11-20'
    },
    {
      id: 2,
      title: 'Create Login API',
      description: 'Implement login functionality',
      projectId: 2,
      assignedTo: 'Rahul',
      priority: 'Medium',
      status: 'Pending',
      dueDate: '2026-11-25'
    },
    {
      id: 3,
      title: 'Dashboard UI',
      description: 'Complete dashboard interface',
      projectId: 3,
      assignedTo: 'Amit',
      priority: 'Low',
      status: 'Completed',
      dueDate: '2026-11-10'
    }
  ]);

  tasks = this.taskList.asReadonly();

  addTask(task: Task) {
    this.taskList.update(tasks => [
      ...tasks,
      { ...task, id: Date.now() }
    ]);
  }

  updateTask(updatedTask: Task) {
    this.taskList.update(tasks =>
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  deleteTask(id: number) {
    this.taskList.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }

  changeStatus(id: number, status: Task['status']) {
    this.taskList.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, status } : task
      )
    );
  }
}
