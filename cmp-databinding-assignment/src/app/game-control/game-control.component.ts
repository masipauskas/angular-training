import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {
  private interval: number;
  private counter: number = 0;

  started: boolean = false;
  @Output() intervals: EventEmitter<number> = new EventEmitter<number>();

  onStart() {
    this.started = true;
    this.interval = window.setInterval(() => {
      this.counter++;
      this.intervals.emit(this.counter);
    }, 1000)
  }

  onStop() {
    this.started = false;
    if (this.interval) {
      window.clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
