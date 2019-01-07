import { Component, Input } from '@angular/core';

@Component({
  selector: 'short-list',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortListComponent {
  siteAdmin = 'Site Admin';
  maxshortlist: number = 3;
  @Input() shortlistedData: any;

  removeUser(removeData: any) {
      removeData.cursor = false;
      for (let r = 0; r < this.shortlistedData.length; r++) {
           if (this.shortlistedData[r].login === removeData.login) {
                this.shortlistedData.splice(r, 1);
           }
      }
  }
  morelist() {
    if (this.shortlistedData.length > 3 && (this.shortlistedData.length !== this.maxshortlist)) {
      this.maxshortlist += 3;
    }
  }
}
