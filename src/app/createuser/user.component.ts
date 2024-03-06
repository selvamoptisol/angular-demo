import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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
          console.log(user)
          this.userList = user;
        })
  }
  editUser(user: any) {
  }

  deleteUser(id:any){
    (Swal as any).fire({
       title: "Are you sure?",
       text: "You Want To Remove It!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, Remove it!"
     }).then((result: any) => {
       if (result.value) {
         //console.log("23")
         this.userService.removeUser(id)
         .subscribe(
           (res: any) => {


           })
        }

  })

}
}
