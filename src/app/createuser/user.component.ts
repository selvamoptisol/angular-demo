import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User;
  userList: Array<User> = [];

  constructor(private userService: UserService,private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        (user: any) => {
          this.userList = user;
        })
  }
  editUser(user: any) {
  }

  deleteUser(id:any){
    this.userService.removeUser(id)
    .subscribe(
      (res: any) => {
      //  this.user =res;

      })
  }

}
