import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
  user: User = new User;


  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.user = new User();
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser()
    .subscribe(
      (res: any) => {
        console.log(res);
      })
  }

  saveUser(form: any) {
    console.log(this.user);
  
    if (form.valid) {
      this.userService.saveUser(this.user)
        .subscribe(
          (res: any) => {
            console.log(res);
          })
    }
    else{
      
    }

  }
}
