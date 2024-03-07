import { Injectable, OnInit } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { API_HOST } from '../app.config';

import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import 'rxjs';


@Injectable()
export class UserService {
    constructor(private http: HttpClient, private _router: Router) { }

    saveUser(user: any) {
        return this.http.post(API_HOST+'/api/users', user)
    }

    removeUser(id: any) {
      //  var formData = {
      //      value: id
      //  }
        return this.http.delete(API_HOST+'/api/users/'+id)
    }

    getAllUser() {
        return this.http.get(API_HOST+'/api/users')
    }

    getUserById(id: any) {
        return this.http.get(API_HOST+'/api/users/' + id)
    }



}
