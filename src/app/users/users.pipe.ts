import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchUsers'
})
export class UsersPipe implements PipeTransform {
   transform(userdata: any[], searchTeam: string): any[] {
     if (!userdata || !searchTeam) {
       return userdata;
     }

     return userdata.filter(users => users.login.toLowerCase().indexOf(searchTeam.toLowerCase()) !== -1);


   }
}

