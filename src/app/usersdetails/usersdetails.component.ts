import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'users-details',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersDetailsComponent {
    @Input() singleuser: any;
    @Output() userhidedetails: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    backbutton() {
        this.userhidedetails.emit(false);
    }
}
