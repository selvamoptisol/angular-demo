import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewUserComponent } from './create-new-user.component';
import { UserComponent } from './user.component';
export const route: Routes = [
  { path: '', component: UserComponent  ,pathMatch: 'full'},
  { path: 'create', component: CreateNewUserComponent  ,pathMatch: 'full'},
  { path: 'update/:id', component: CreateNewUserComponent  ,pathMatch: 'full'},

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route),
   
  ],
  declarations: [
    CreateNewUserComponent,
    UserComponent

  ]
})

export class UserModule { }