
import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task';
import { ProjectService } from '../../core/services/project';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {}

  get tasks(): Task[] {
    return this.taskService.tasks();
  }

  get projects(): Project[] {
    return this.projectService.projects();
  }

  get totalProjects(): number {
    return this.projects.length;
  }

  get activeProjects(): number {
    return this.projects.filter(
      project => project.status === 'In Progress'
    ).length;
  }

  get completedProjects(): number {
    return this.projects.filter(
      project => project.status === 'Completed'
    ).length;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(
      task => task.status === 'Pending'
    ).length;
  }

  get inProgressTasks(): number {
    return this.tasks.filter(
      task => task.status === 'In Progress'
    ).length;
  }

  get completedTasks(): number {
    return this.tasks.filter(
      task => task.status === 'Completed'
    ).length;
  }

  get taskCompletionPercentage(): number {
    if (this.totalTasks === 0) return 0;

    return Math.round(
      (this.completedTasks / this.totalTasks) * 100
    );
  }

  get averageProjectProgress(): number {
    if (this.totalProjects === 0) return 0;

    const total = this.projects.reduce(
      (sum, project) => sum + project.progress,
      0
    );

    return Math.round(total / this.totalProjects);
  }

  getTaskCountByPriority(priority: Task['priority']): number {
    return this.tasks.filter(
      task => task.priority === priority
    ).length;
  }

  getPriorityPercentage(priority: Task['priority']): number {
    if (this.totalTasks === 0) return 0;

    return Math.round(
      (this.getTaskCountByPriority(priority) / this.totalTasks) * 100
    );
  }

  getTaskPercentage(status: Task['status']): number {
    if (this.totalTasks === 0) return 0;

    const count = this.tasks.filter(
      task => task.status === status
    ).length;

    return Math.round((count / this.totalTasks) * 100);
  }
}
