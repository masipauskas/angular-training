import {EventEmitter, Injectable} from '@angular/core';
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor(private usersService: UsersService) {
    this.usersService.userStatusChanged.subscribe((name: string) => {
      this.currentCounter++;
      this.counter.emit(this.currentCounter);
    })
  }

  private currentCounter: number = 0;

  counter: EventEmitter<number> = new EventEmitter<number>();
  }
