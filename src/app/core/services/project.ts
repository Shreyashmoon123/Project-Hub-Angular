
import { Injectable, signal, effect } from '@angular/core';
import { Project } from '../../models/project.model';

const defaultProjects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Redesign company website',
    category: 'UI/UX Design',
    startDate: '2026-11-01',
    dueDate: '2026-12-01',
    status: 'In Progress',
    progress: 75
  },
  {
    id: 2,
    name: 'Mobile Application',
    description: 'Develop mobile application',
    category: 'Development',
    startDate: '2026-11-05',
    dueDate: '2026-12-15',
    status: 'Planning',
    progress: 20
  },
  {
    id: 3,
    name: 'CRM Dashboard',
    description: 'Build CRM dashboard',
    category: 'Development',
    startDate: '2026-10-01',
    dueDate: '2026-11-10',
    status: 'Completed',
    progress: 100
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private loadProjects(): Project[] {
    try {
      const savedProjects = localStorage.getItem('projects');

      if (savedProjects !== null) {
        const parsedProjects = JSON.parse(savedProjects);

        if (Array.isArray(parsedProjects)) {
          return parsedProjects;
        }
      }
    } catch (error) {
      console.error('Unable to load projects:', error);
    }

    return defaultProjects;
  }

  private projectList = signal<Project[]>(this.loadProjects());

  projects = this.projectList.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(
          'projects',
          JSON.stringify(this.projectList())
        );
      } catch (error) {
        console.error('Unable to save projects:', error);
      }
    });
  }

  addProject(project: Project) {
    this.projectList.update(projects => [
      ...projects,
      { ...project, id: Date.now() }
    ]);
  }

  updateProject(updatedProject: Project) {
    this.projectList.update(projects =>
      projects.map(project =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  deleteProject(id: number) {
    this.projectList.update(projects =>
      projects.filter(project => project.id !== id)
    );
  }
}
