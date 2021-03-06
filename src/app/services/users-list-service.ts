import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class UsersListService {
    
    constructor(private http: HttpClient) {
        
    }
    
    getUser(): Observable<any> {
        return this.http.get('https://api.github.com/users');
    }
}
