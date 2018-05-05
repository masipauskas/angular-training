import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  even: number[] = [];
  odd: number[] = [];

  onInterval(n: number) {
    if (n % 2 == 0) {
      this.even.push(n);
    } else {
      this.odd.push(n);
    }
  }
}
