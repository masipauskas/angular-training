import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
  constructor(private service: UsersService) {}

  users: string[];

  onSetToInactive(id: number) {
    this.service.setToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.service.activeUsers;
  }
}
