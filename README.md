# 🚀 Project Hub – Project Management System

A modern, responsive Project Management System built with **Angular and TypeScript**. Project Hub provides a centralized dashboard to organize projects, manage tasks, track team activities, monitor deadlines, and view project reports.

The application features a professional admin dashboard, interactive Kanban board, and browser-based data persistence using LocalStorage.

## ✨ Features

### 📊 Dashboard
- Overview of total projects and tasks
- Project and task status summaries
- Live statistics from application data

### 📁 Project Management
- Create new projects
- Edit existing projects
- Delete projects
- Track project progress and deadlines
- Manage project status and categories

### ✅ Task Management
- Create, update, and delete tasks
- Assign tasks to team members
- Set task priorities
- Track task status and due dates
- Link tasks with projects

### 📋 Kanban Board
- View tasks in Pending, In Progress, and Completed columns
- Update task status directly from the board
- Keep task information synchronized with task management

### 👥 Team Management
- Add and manage team members
- Edit member details
- Manage roles and departments
- Track active and inactive members

### 📅 Calendar
- Monthly calendar view
- View project and task deadlines
- Navigate between months

### 📈 Reports
- Project and task statistics
- Completion percentages
- Task priority and status summaries

### ⚙️ Settings
- Profile preferences
- General application settings
- Notification preferences
- Appearance preferences

## 🛠️ Tech Stack

- **Frontend:** Angular
- **Language:** TypeScript
- **Styling:** HTML5 and CSS3
- **State Management:** Angular Signals
- **Data Persistence:** Browser LocalStorage
- **Version Control:** Git and GitHub
- **Deployment:** Netlify

## 📂 Project Structure

```text
src/
└── app/
    ├── core/
    │   ├── services/
    │   ├── guards/
    │   └── layouts/
    ├── models/
    ├── features/
    │   ├── dashboard/
    │   ├── projects/
    │   ├── tasks/
    │   ├── team/
    │   ├── calendar/
    │   ├── reports/
    │   └── settings/
    └── shared/
        ├── components/
        ├── pipes/
        └── directives/
```

## 💻 Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI

### 1. Clone the repository

```bash
git clone https://github.com/Shreyashmoon123/Project-Hub-Angular.git
```

### 2. Navigate to the project

```bash
cd Project-Hub-Angular
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
ng serve
```

Open your browser at:

```text
http://localhost:4200/
```

### 5. Build for production

```bash
ng build
```

## 💾 Data Storage

Project Hub currently uses browser LocalStorage to persist projects, tasks, team members, and settings.

- Data remains available after refreshing the page in the same browser.
- Data is specific to the browser and website origin.
- Clearing browser site data can remove saved application data.
- No backend API or cloud database is currently connected.

## 🌐 Deployment

The application can be deployed using Netlify.

1. Push the project to GitHub.
2. Connect the GitHub repository to Netlify.
3. Configure the Angular production build command.
4. Set the correct Angular build output directory.
5. Deploy the application.

## 🔮 Future Improvements

- Backend integration using ASP.NET Core Web API
- SQL Server database integration
- User authentication and role-based authorization
- Real-time notifications
- Advanced reporting and analytics
- Cloud-based data storage
- Team collaboration features

## 👨‍💻 Author

**Shreyash Katiyar**

GitHub: [@Shreyashmoon123](https://github.com/Shreyashmoon123)

Project Repository: [Project-Hub-Angular](https://github.com/Shreyashmoon123/Project-Hub-Angular)

---

⭐ If you find this project useful, consider giving it a star!
