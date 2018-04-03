import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]' può essere richiamato <div app-servers>
  // selector: '.app-servers' può essere richiamato in <div class="app-servers">
  selector: 'app-servers', // Modalità consigliata
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
