import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import firebase from 'firebase/compat/app'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated = false;
  currentUser: firebase.User | null | undefined;

  constructor(
    public login: LoginService, 
    ){

     }
     ngOnInit(): void {
      console.log('Component initialized');
      this.login.getCurrentUser().subscribe(user => {
        console.log('User:', user);  // Log the user state
        this.currentUser = user;
        this.isAuthenticated = !!user;  // Check if the user is authenticated
      });
    }

  loginWithGoogle($event: Event){
    $event.preventDefault()

    this.login.loginWithGoogle()
  }
  
  logout(){
    this.login.logout();
  }


}

