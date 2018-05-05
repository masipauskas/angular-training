import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultWarning = "This is a good warning";
  defaultSuccess = "This is a success";

  warning = null;
  success = null;

  onToggle() {
    if (this.warning != null) {
      this.warning = null;
      this.success = this.defaultSuccess;
    } else {
      this.success = null;
      this.warning = this.defaultWarning;
    }
  }
}
