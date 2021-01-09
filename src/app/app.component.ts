import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds = [];
  evens = [];

  onEachSeconds(secondsNumber: number){
    console.log(secondsNumber);
    if (secondsNumber %2 === 0){
      this.evens.push(secondsNumber);
    } else {
      this.odds.push(secondsNumber);
    }
  }
}
