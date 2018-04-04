import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio-due',
  templateUrl: './esercizio-due.component.html',
  styleUrls: ['./esercizio-due.component.css']
})
export class EsercizioDueComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  getFlg() {
    if(this.username === ''){
      return true;
    }
    return false;
  }

  reset(){
    this.username='';
  }
}
