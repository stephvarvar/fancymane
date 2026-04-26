import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
constructor(
  public auth: AngularFireAuth,
  public signin: LoginService
  ){}
 
  loginWithGoogle($event: Event){
    $event.preventDefault()
    
    this.signin.loginWithGoogle()
  }
  
  logout(){
    this.signin.logout();
  }

    
}
