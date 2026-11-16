export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  startDate: string;
  dueDate: string;
  status: 'In Progress' | 'Planning' | 'Completed';
  progress: number;
}