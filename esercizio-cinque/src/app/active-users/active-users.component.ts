import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  active = 0;

  constructor(private usersServices: UsersServices){ }

  onSetToInactive(id: number) {
    this.usersServices.onSetToInactive(id);
    this.active =this.users.length; 
  }

  ngOnInit(){
    this.users = this.usersServices.activeUsers;
    this.active =this.users.length; 
  }
}
