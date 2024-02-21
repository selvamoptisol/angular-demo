import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User;
  userList: Array<User> = []; 

  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.user = new User();
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        (user: any) => {
          console.log(user);
          this.userList = user;
          console.log( this.userList);
        })
  }

  
}
