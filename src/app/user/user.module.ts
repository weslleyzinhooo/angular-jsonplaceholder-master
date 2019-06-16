import { Address } from './address';
import { Geo } from './geo';
import { Company } from './company';
import { User } from './user';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [UserListComponent]
})
export class UserModule { }
