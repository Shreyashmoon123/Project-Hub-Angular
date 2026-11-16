
export interface TeamMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'Admin' | 'Manager' | 'Developer' | 'Designer';
  department: string;
  status: 'Active' | 'Inactive';
  joiningDate: string;
  avatar: string;
}
