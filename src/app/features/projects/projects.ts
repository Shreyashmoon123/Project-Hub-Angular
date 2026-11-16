
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../core/services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  showForm = false;
  editingId: number | null = null;

  constructor(private projectService: ProjectService) {}

  get projects(): Project[] {
    return this.projectService.projects();
  }

  newProject: Project = this.getEmptyProject();

  getEmptyProject(): Project {
    return {
      id: 0,
      name: '',
      description: '',
      category: '',
      startDate: '',
      dueDate: '',
      status: 'Planning',
      progress: 0
    };
  }

  openForm() {
    this.editingId = null;
    this.newProject = this.getEmptyProject();
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.newProject = this.getEmptyProject();
  }

  editProject(project: Project) {
    this.editingId = project.id;
    this.newProject = { ...project };
    this.showForm = true;
  }

  saveProject() {
    if (
      !this.newProject.name.trim() ||
      !this.newProject.category.trim() ||
      !this.newProject.description.trim() ||
      !this.newProject.startDate ||
      !this.newProject.dueDate
    ) {
      alert('Please fill all required fields.');
      return;
    }

    if (this.newProject.dueDate < this.newProject.startDate) {
      alert('Due date cannot be earlier than start date.');
      return;
    }

    if (
      Number(this.newProject.progress) < 0 ||
      Number(this.newProject.progress) > 100
    ) {
      alert('Progress must be between 0 and 100.');
      return;
    }

    if (this.editingId !== null) {
      this.projectService.updateProject({
        ...this.newProject,
        id: this.editingId,
        progress: Number(this.newProject.progress)
      });
    } else {
      this.projectService.addProject({
        ...this.newProject,
        progress: Number(this.newProject.progress)
      });
    }

    this.closeForm();
  }

  deleteProject(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this project?'
    );

    if (confirmDelete) {
      this.projectService.deleteProject(id);
    }
  }
}
