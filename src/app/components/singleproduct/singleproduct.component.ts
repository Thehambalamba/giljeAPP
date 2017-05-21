import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  product_id: string;
	product: Product[] = [];
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		console.log(params);
  		this.product_id = params['id'];
    	
	    this.authService.getProductsById(this.product_id)
	      .then(product => {
	      	console.log(product);
	     this.product = product;
	      })
	      .catch((err) => {
	      	console.warn(err);
	      }); 		
    
    });
  
  }

}
