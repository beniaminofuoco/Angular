import { Component, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-eserzio-tre',
  templateUrl: './eserzio-tre.component.html',
  styleUrls: ['./eserzio-tre.component.css']
})
export class EserzioTreComponent implements OnInit {
  log = [];
  flg = false;

  constructor() {
    this.flg = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.log.push(new Date());
    return this.flg = !this.flg;
  }
}
