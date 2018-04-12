import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersServices: UsersServices, private counter: CounterService) { }

  onSetToActive(id: number) {
    this.usersServices.onSetToActive(id);
  }

  ngOnInit() {
    this.users = this.usersServices.inactiveUsers;
  }
}
