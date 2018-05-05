import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit {
  constructor(private service: UsersService) {}

  users: string[];

  onSetToActive(id: number) {
    this.service.setToActive(id);
  }

  ngOnInit(): void {
    this.users = this.service.inactiveUsers;
  }
}
