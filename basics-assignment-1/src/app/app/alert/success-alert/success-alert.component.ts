import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html'
})
export class SuccessAlertComponent implements OnInit {
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
