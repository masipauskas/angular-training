import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "./counter.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private counterService: CounterService) { }
  private subscription: Subscription;

  changes: number = 0;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.counterService.counter
      .subscribe((value: number) => {
          this.changes = value;
      });
  }
}
