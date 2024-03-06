import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.services';
import { ActivatedRoute, Params ,Router} from '@angular/router';


@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
  user: User = new User;
  id: any;
  isError: boolean = false;
  isupdate: boolean = false;

  constructor(private userService: UserService, private activateroute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.getAllUser();
    this.activateroute.params.subscribe((params: Params) => {
      this.id = params['id'];

      if (this.id) {
        this.getUserById(this.id);
        this.isupdate = true;
      } else {
        this.user = new User();

      }
    });
  }

  getUserById(id: any) {
    this.userService.getUserById(id)
      .subscribe(
        (res: any) => {
          this.user =res;

        })
  }

  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        (res: any) => {
        })
  }

  saveUser(form: any) {
    if (form.valid) {
       this.userService.saveUser(this.user)
         .subscribe(
           (res: any) => {
             console.log(res);
             this.router.navigate(['/user']);
           })
    }
    else {
      this.isError = true;
    }
  }



}
