import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from './models/users';

@Injectable({ providedIn: 'root' })
  export class UserService {

    get baseUrl() {
      return 'https://609e523133eed80017958404.mockapi.io/api/users';
    }

    constructor(private http: HttpClient) {
    }

    getUsers() {
      return this.http.get<Users[]>(`${this.baseUrl}`);
    }

    getUser(id: number): Observable<Users> {
      return this.http.get<Users>(`${this.baseUrl}/${id}`);
    }

    createUsers(user: Users):Observable<Users>{
      return this.http.post<Users>(`${this.baseUrl}`, user)
    }

    edit_user(user: Users):Observable<Users>{
      return this.http.put<Users>(`${this.baseUrl}/${user.id}`, user)
    }

    deleteUser(id: number): Observable<unknown>{
      return this.http.delete(`${this.baseUrl}/${id}`)
    }
    
  }



