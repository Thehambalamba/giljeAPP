import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  userName: String;
  password: String;
  email: String;
  phoneNumber: Number;


  constructor(
   private validateService: ValidateService,
   private flashMessage: FlashMessagesService,
   private authService: AuthService,
   private router: Router
   ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
  const user = {
  	firstName: this.firstName,
  	lastName: this.lastName,
  	userName: this.userName,
  	password: this.password,
  	email: this.email,
  	phoneNumber: this.phoneNumber,

  }

  // Provera polja
  if (!this.validateService.validateRegister(user)){
  	this.flashMessage.show('Molimo vas popunite sva polja.', {cssClass: '',timeout: 3000});
  	return false;
  }

  // Provera emaila
  if (!this.validateService.validateEmail(user.email)){
  	this.flashMessage.show('Uneti email nije validan.Molimo vas unesite validan email.', {cssClass: '',timeout: 3000});
  	return false;
  }

  // Kreiranje korisnika
  this.authService.registerUser(user).subscribe(data => {
    if (data.success) {
     this.flashMessage.show('Uspešno ste se registrovali.Možete se ulogovati.', {cssClass: '',timeout: 3000});
     this.router.navigate(['/login']);
    } else {
     this.flashMessage.show('Došlo je do greške.Molimo vas pokušajte ponovo.', {cssClass: '',timeout: 3000});
     this.router.navigate(['/register']);
    }

  });

  }
}
