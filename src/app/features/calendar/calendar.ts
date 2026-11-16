
import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task';
import { ProjectService } from '../../core/services/project';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';

interface CalendarDay {
  date: Date;
  dateKey: string;
  dayNumber: number;
  currentMonth: boolean;
  today: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {}

  currentDate = new Date();
  calendarDays: CalendarDay[] = [];

  get tasks(): Task[] {
    return this.taskService.tasks();
  }

  get projects(): Project[] {
    return this.projectService.projects();
  }

  get monthYear(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  }

  ngOnInit() {
    this.generateCalendar();
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;

    const calendarStart = new Date(year, month, 1 - startDay);

    const todayKey = this.formatDate(new Date());

    this.calendarDays = [];

    for (let i = 0; i < 42; i++) {
      const date = new Date(calendarStart);
      date.setDate(calendarStart.getDate() + i);

      const dateKey = this.formatDate(date);

      this.calendarDays.push({
        date,
        dateKey,
        dayNumber: date.getDate(),
        currentMonth: date.getMonth() === month,
        today: dateKey === todayKey
      });
    }
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );

    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );

    this.generateCalendar();
  }

  goToToday() {
    this.currentDate = new Date();
    this.generateCalendar();
  }

  getTasksForDate(dateKey: string): Task[] {
    return this.tasks.filter(task => task.dueDate === dateKey);
  }

  getProjectsForDate(dateKey: string): Project[] {
    return this.projects.filter(project => project.dueDate === dateKey);
  }
}
