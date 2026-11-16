
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';
import { TeamMember } from '../../models/team-member.model';

import { TaskService } from '../../core/services/task';
import { ProjectService } from '../../core/services/project';
import { TeamService } from '../../core/services/team';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  showForm = false;
  editingId: number | null = null;

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private teamService: TeamService
  ) {}

  get tasks(): Task[] {
    return this.taskService.tasks();
  }

  get projects(): Project[] {
    return this.projectService.projects();
  }

  get teamMembers(): TeamMember[] {
    return this.teamService.members();
  }

  get pendingTasks(): number {
    return this.tasks.filter(t => t.status === 'Pending').length;
  }

  get inProgressTasks(): number {
    return this.tasks.filter(t => t.status === 'In Progress').length;
  }

  get completedTasks(): number {
    return this.tasks.filter(t => t.status === 'Completed').length;
  }

  newTask: Task = this.getEmptyTask();

  getEmptyTask(): Task {
    return {
      id: 0,
      title: '',
      description: '',
      projectId: 0,
      assignedTo: '',
      priority: 'Medium',
      status: 'Pending',
      dueDate: ''
    };
  }

  getProjectName(projectId: number): string {
    return this.projects.find(p => p.id === projectId)?.name ?? 'Unknown';
  }

  openForm() {
    this.editingId = null;
    this.newTask = this.getEmptyTask();
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.newTask = this.getEmptyTask();
  }

  editTask(task: Task) {
    this.editingId = task.id;
    this.newTask = { ...task };
    this.showForm = true;
  }

  saveTask() {
    if (
      !this.newTask.title.trim() ||
      !this.newTask.description.trim() ||
      !this.newTask.assignedTo.trim() ||
      this.newTask.projectId === 0 ||
      !this.newTask.dueDate
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const selectedProject = this.projects.find(
      p => p.id === this.newTask.projectId
    );

    const selectedMember = this.teamMembers.find(
      m => m.name === this.newTask.assignedTo
    );

    if (!selectedProject) {
      alert('Please select a valid project.');
      return;
    }

    if (!selectedMember || selectedMember.status !== 'Active') {
      alert('Please select an active team member.');
      return;
    }

    if (this.editingId !== null) {
      this.taskService.updateTask({
        ...this.newTask,
        id: this.editingId
      });
    } else {
      this.taskService.addTask(this.newTask);
    }

    this.closeForm();
  }

  deleteTask(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this task?'
    );

    if (confirmDelete) {
      this.taskService.deleteTask(id);
    }
  }
}
