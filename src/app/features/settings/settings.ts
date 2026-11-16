
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  activeTab = 'profile';

  settings = {
    name: 'Shreyash Katiyar',
    email: 'shreyash@example.com',
    role: 'Administrator',
    company: 'Project Hub',
    timezone: 'Asia/Kolkata',
    language: 'English',
    emailNotifications: true,
    taskReminders: true,
    projectUpdates: false,
    weeklyReports: true,
    theme: 'light'
  };

  constructor() {
    const savedSettings = localStorage.getItem('appSettings');

    if (savedSettings) {
      this.settings = {
        ...this.settings,
        ...JSON.parse(savedSettings)
      };
    }
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  saveSettings(): void {
    localStorage.setItem('appSettings', JSON.stringify(this.settings));
    alert('Settings saved successfully!');
  }

  resetSettings(): void {
    if (confirm('Are you sure you want to reset settings?')) {
      localStorage.removeItem('appSettings');
      window.location.reload();
    }
  }
}
