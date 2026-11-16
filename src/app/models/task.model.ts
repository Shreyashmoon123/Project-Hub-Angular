
export interface Task {
  id: number;
  title: string;
  description: string;
  projectId: number;
  assignedTo: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: string;
}
