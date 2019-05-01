import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  data: User[] = [];
  isLoadingResults = true;

  constructor(private api: UserService) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
