import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html'
})
export class WarningAlertComponent {
  @Input() message;
}
