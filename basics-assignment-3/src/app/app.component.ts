import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = false;
  logs: Date[] = [];

  toggle() {
    this.visible = !this.visible;
    this.logs.push(new Date())
  }
}
