import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<User[]> {
        return this.http.get<User[]>(`/users`);
    }

    public register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    public delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}