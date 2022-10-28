import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User.class';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getUserByEmailAndPassword(email: string, password: string){
    return this.http.get<User[]>('../assets/jsondata/users.json')
    .pipe(map(u => u.filter(u => u.email == email && u.password == password))); 
  }
}
