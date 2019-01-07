import {Component, OnInit } from '@angular/core';
import {UsersListService} from '../services/users-list-service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  siteAdmin = 'Site Admin';
   userdata: any[] = [];
   user: { } = {};
   selectedData: any[] = [];
   hideDetails: boolean = false;
   searchTerm: string;
    constructor(private userService: UsersListService) {
    }
    ngOnInit() {
      this.userService.getUser().subscribe((res: any) => {
            this.userdata = res;
            for (var t = 0; t < this.userdata.length; t++) {
            this.userdata[t].cursor = false;
           }
        });
        
        
    }
    userdetails(user: any) {
        this.user = user;
        this.hideDetails = true;
    }
    hideUserDetails(event: any) {
        this.hideDetails = event;
    }

  addUser(shortlist: any, index:number) {
      debugger;
        this.selectedData.push(shortlist);
      this.userdata[index].cursor = true;
        
  }
  cancelUser(cancel: any) {
      for (let c = 0; c < this.userdata.length; c++) {
         if (this.userdata[c].login === cancel.login) {
           this.userdata.splice(c, 1);
         }
      }
  }
}
