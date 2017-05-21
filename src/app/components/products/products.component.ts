import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Object;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.authService.getProducts().subscribe(products => {
      this.products = products;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  

}
