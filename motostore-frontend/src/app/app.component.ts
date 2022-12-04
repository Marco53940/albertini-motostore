import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService){

  }

  loggedIn = false;
  error = '';

  isLoggedIn(){
    if(this.authService.getUserLogged() == 'OK'){
      this.loggedIn = true;
    }
  }

  getUserInfo(data: any) {
    this.authService.login(data).subscribe( response =>
      console.log(response));
  }
}
