import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User.class';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByEmailAndPassword(email: string, password: string){
    // this.http.get<any>('../assets/jsondata/users.json').subscribe((res) => {
    //   const userList: User[] = res.users;
    //   const user = userList.find(r => r.email == email && r.password == password)
    //   return user;      
    // })
    return new Promise<User | undefined>((resolve) => {
      this.http.get<any>('../assets/jsondata/users.json').subscribe((res) => {
        const userList: User[] = res.users;
        const user = userList.find(r => r.email == email && r.password == password);
        resolve(user)     
      })
    })

  }
}
