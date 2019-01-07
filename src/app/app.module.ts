import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MasterComponent } from './master/master.component';
import { UserListComponent } from './userlist/userlist.component';
import { UsersListService } from './services/users-list-service';
import {UsersDetailsComponent} from './usersdetails/usersdetails.component';
import {ShortListComponent} from './shortlist/shortlist.component';
import {UsersPipe} from './users/users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    UserListComponent,
    UsersComponent,
    UsersDetailsComponent,
    ShortListComponent,
    UsersPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
