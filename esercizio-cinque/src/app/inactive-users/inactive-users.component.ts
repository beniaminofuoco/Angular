import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  inactive = 0;

  constructor(private usersServices: UsersServices) { }

  onSetToActive(id: number) {
    this.usersServices.onSetToActive(id);
    this.inactive = this.users.length;
  }

  ngOnInit() {
    this.users = this.usersServices.inactiveUsers;
    this.inactive = this.users.length;
  }
}
