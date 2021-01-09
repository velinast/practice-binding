import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: any;
  @Output() eachSeconds = new EventEmitter<number>();
  n: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
   this.timer = setInterval(() => {
     this.eachSeconds.emit(this.n + 1);
     this.n++
     }, 1000);

  }
  onStopGame() {
    console.log('stop');
    clearInterval(this.timer);
  }
}
