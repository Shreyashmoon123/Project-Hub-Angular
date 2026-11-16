
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  stats = [
    {
      title: 'Total Projects',
      value: 12,
      change: '+12%',
      icon: '▣',
      color: 'purple'
    },
    {
      title: 'Total Tasks',
      value: 86,
      change: '+8%',
      icon: '☑',
      color: 'blue'
    },
    {
      title: 'Completed Tasks',
      value: 54,
      change: '+15%',
      icon: '✓',
      color: 'green'
    },
    {
      title: 'Pending Tasks',
      value: 32,
      change: '-5%',
      icon: '◷',
      color: 'orange'
    }
  ];

  projects = [
    {
      name: 'Website Redesign',
      category: 'UI/UX Design',
      progress: 75,
      status: 'In Progress'
    },
    {
      name: 'Mobile Application',
      category: 'Development',
      progress: 45,
      status: 'In Progress'
    },
    {
      name: 'CRM Dashboard',
      category: 'Development',
      progress: 100,
      status: 'Completed'
    },
    {
      name: 'Marketing Campaign',
      category: 'Marketing',
      progress: 25,
      status: 'In Progress'
    }
  ];

  tasks = [
    {
      title: 'Design homepage layout',
      project: 'Website Redesign',
      priority: 'High',
      status: 'In Progress'
    },
    {
      title: 'Create login functionality',
      project: 'Mobile Application',
      priority: 'Medium',
      status: 'Pending'
    },
    {
      title: 'Review dashboard UI',
      project: 'CRM Dashboard',
      priority: 'Low',
      status: 'Completed'
    },
    {
      title: 'Prepare marketing report',
      project: 'Marketing Campaign',
      priority: 'High',
      status: 'Pending'
    }
  ];

}
