import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[]= [];
  evnNumbers: number[]= [];

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.evnNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }  
}
