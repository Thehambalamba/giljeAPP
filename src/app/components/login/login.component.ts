import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String;
  password: String;

  constructor(
  	private authService: AuthService,
  	private router: Router,
  	private flashMessage: FlashMessagesService
  	) { }

  ngOnInit() {
  }
  onLoginSubmit(){
  	const user = {
  		userName: this.userName,
  		password: this.password
  	}

  	this.authService.authenticateUser(user).subscribe(data => {
  		if (data.success) {
  			this.authService.storeUserData(data.token, data.user);
  			this.flashMessage.show('Uspešno ste se ulogovali.', {cssClass: '', timeout: 5000});
  			this.router.navigate(['/']);
  		} else {
  			this.flashMessage.show(data.message, {cssClass: '', timeout: 5000});
  			this.router.navigate(['login']);
  		}

  	});
  }
}
