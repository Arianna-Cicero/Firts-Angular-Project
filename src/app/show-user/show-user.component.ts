import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

    users_data!: Users[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users_data = users);
  }

}
