
import { Injectable, signal, effect } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';

const defaultMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Shreyash Katiyar',
    email: 'shreyash@example.com',
    phone: '9876543210',
    role: 'Admin',
    department: 'Management',
    status: 'Active',
    joiningDate: '2026-06-17',
    avatar: 'SK'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '9876543211',
    role: 'Developer',
    department: 'Development',
    status: 'Active',
    joiningDate: '2026-07-01',
    avatar: 'RS'
  },
  {
    id: 3,
    name: 'Amit Verma',
    email: 'amit@example.com',
    phone: '9876543212',
    role: 'Designer',
    department: 'UI/UX Design',
    status: 'Active',
    joiningDate: '2026-08-10',
    avatar: 'AV'
  },
  {
    id: 4,
    name: 'Priya Singh',
    email: 'priya@example.com',
    phone: '9876543213',
    role: 'Manager',
    department: 'Management',
    status: 'Inactive',
    joiningDate: '2026-09-15',
    avatar: 'PS'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private loadMembers(): TeamMember[] {
    try {
      const savedMembers = localStorage.getItem('teamMembers');

      if (savedMembers !== null) {
        const parsedMembers = JSON.parse(savedMembers);

        if (Array.isArray(parsedMembers)) {
          return parsedMembers as TeamMember[];
        }
      }
    } catch (error) {
      console.error('Unable to load team members:', error);
    }

    return defaultMembers;
  }

  private memberList = signal<TeamMember[]>(this.loadMembers());

  readonly members = this.memberList.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(
          'teamMembers',
          JSON.stringify(this.memberList())
        );
      } catch (error) {
        console.error('Unable to save team members:', error);
      }
    });
  }

  addMember(member: TeamMember): void {
    this.memberList.update(members => [
      ...members,
      { ...member, id: Date.now() }
    ]);
  }

  updateMember(updatedMember: TeamMember): void {
    this.memberList.update(members =>
      members.map(member =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
  }

  deleteMember(id: number): void {
    this.memberList.update(members =>
      members.filter(member => member.id !== id)
    );
  }
}
