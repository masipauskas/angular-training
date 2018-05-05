import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userStatusChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setToInactive(id: number) {
    this.moveUser(id, this.activeUsers, this.inactiveUsers);
  }

  setToActive(id: number) {
    this.moveUser(id, this.inactiveUsers, this.activeUsers);
  }

  private moveUser(id: number, from: string[], to: string[]) {
    let user = from[id];
    to.push(user);
    from.splice(id, 1);
    this.userStatusChanged.emit(user)
  }
}
