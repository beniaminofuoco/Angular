import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]' può essere richiamato <div app-servers>
  // selector: '.app-servers' può essere richiamato in <div class="app-servers">
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreationStatus='Server was Created';
  }
}
