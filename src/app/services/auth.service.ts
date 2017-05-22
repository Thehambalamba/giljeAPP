import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  private baseUrl: string = 'http://localhost:8080/api/products';
  constructor(private http: Http) { }

  registerUser(user) {
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:8080/api/users', user,{headers: headers})
  	 .map(res => res.json());
  }
  createProduct(product) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:8080/api/products', product,{headers: headers})
  	 .map(res => res.json());
  }

  authenticateUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:8080/api/authenticate', user,{headers: headers})
  	 .map(res => res.json());
  }

  getProducts() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/api/products', {headers: headers})
     .map(res => res.json());

  }
  getProductsById(productId) {
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type','application/json');
    	return this.http.get(`${this.baseUrl}/${productId}`, {headers: headers})

     	 	.toPromise()
     		.then(res => {
      			return res.json();
      		});
 	 }

  storeUserData(token, user) {
  	localStorage.setItem('id_token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
  	this.user = user;
  }
  
  loggedIn() {
  return tokenNotExpired('id_token');
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  logout() {
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();

  }
}
