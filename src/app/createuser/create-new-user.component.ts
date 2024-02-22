import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
  user: User = new User;
  id: any;
  isError: boolean = false;


  constructor(private userService: UserService, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
    this.getAllUser();

  }

  getUserById(id: any) {
    this.userService.getUserById(id)
      .subscribe(
        (res: any) => {
          console.log(res);
        })
  }

  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        (res: any) => {
          console.log(res);
        })
  }

  saveUser(form: any) {
    console.log(this.user);
    console.log(form.valid)
    if (form.valid) {
      console.log("122")
       this.userService.saveUser(this.user)
         .subscribe(
           (res: any) => {
             console.log(res);
           })
    }
    else {
      this.isError = true;
    }
  }

}
