import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html'
})
export class WarningAlertComponent implements OnInit {
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
