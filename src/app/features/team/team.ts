
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../../models/team-member.model';
import { TeamService } from '../../core/services/team';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {

  constructor(private teamService: TeamService) {}

  showForm = false;
  editingId: number | null = null;

  get members(): TeamMember[] {
    return this.teamService.members();
  }

  newMember: TeamMember = this.getEmptyMember();

  getEmptyMember(): TeamMember {
    return {
      id: 0,
      name: '',
      email: '',
      phone: '',
      role: 'Developer',
      department: '',
      status: 'Active',
      joiningDate: '',
      avatar: ''
    };
  }

  get activeMembers(): number {
    return this.members.filter(m => m.status === 'Active').length;
  }

  get inactiveMembers(): number {
    return this.members.filter(m => m.status === 'Inactive').length;
  }

  openForm() {
    this.editingId = null;
    this.newMember = this.getEmptyMember();
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.newMember = this.getEmptyMember();
  }

  editMember(member: TeamMember) {
    this.editingId = member.id;
    this.newMember = { ...member };
    this.showForm = true;
  }

  saveMember() {
    if (
      !this.newMember.name.trim() ||
      !this.newMember.email.trim() ||
      !this.newMember.phone.trim() ||
      !this.newMember.department.trim() ||
      !this.newMember.joiningDate
    ) {
      alert('Please fill all required fields.');
      return;
    }

    if (this.editingId !== null) {
      this.teamService.updateMember({
        ...this.newMember,
        id: this.editingId,
        avatar: this.newMember.name
          .split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase()
      });
    } else {
      this.teamService.addMember({
        ...this.newMember,
        avatar: this.newMember.name
          .split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase()
      });
    }

    this.closeForm();
  }

  deleteMember(id: number) {
    if (confirm('Are you sure you want to delete this member?')) {
      this.teamService.deleteMember(id);
    }
  }
}
