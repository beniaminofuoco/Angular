import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersServices: UsersServices, private counter: CounterService){ }

  onSetToInactive(id: number) {
    this.usersServices.onSetToInactive(id);
  }

  ngOnInit(){
    this.users = this.usersServices.activeUsers;
  }
}
