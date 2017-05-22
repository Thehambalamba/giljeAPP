import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  name: String;
  size: Number;
  description: String;
  price: Number;
  brand: String;

  constructor(
   private validateService: ValidateService,
   private flashMessage: FlashMessagesService,
   private authService: AuthService,
   private router: Router
   ) { }

  ngOnInit() {
  }

  onCreateSubmit() {
    const product = {
    name: this.name,
    size: this.size,
    description: this.description,
    price: this.price,
    brand: this.brand,
  	
  }

    // Provera polja
  if (!this.validateService.validateCreate(product)){
  	this.flashMessage.show('Molimo vas popunite sva polja.', {cssClass: '',timeout: 3000});
  	return false;
  }

  this.authService.createProduct(product).subscribe(data => {
    if (data.success) {
     this.flashMessage.show('Uspešno ste kreirali proizvod.', {cssClass: '',timeout: 3000});
     this.router.navigate(['/']);
    } else {
     this.flashMessage.show('Došlo je do greške.Molimo vas pokušajte ponovo.', {cssClass: '',timeout: 3000});
     this.router.navigate(['/addproduct']);
    }

  });
 }
}