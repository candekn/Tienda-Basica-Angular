import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User | null;
  
  constructor(private router: Router) { 
    const userStorage = localStorage.getItem('user');
    if(userStorage){
      this.user = JSON.parse(userStorage);
    }else{
      this.user = null;
    }
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
