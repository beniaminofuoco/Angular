import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]' può essere richiamato <div app-servers>
  // selector: '.app-servers' può essere richiamato in <div class="app-servers">
  selector: 'app-servers', // Modalità consigliata
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
