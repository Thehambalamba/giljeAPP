import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.firstName == undefined || user.lastName == undefined || user.userName == undefined || user.password == undefined || user.email == undefined || user.phoneNumber == undefined){
  		return false;
  	} else {
  		return true;
  	}
  }
  validateCreate(product){
  	if(product.name == undefined || product.size == undefined || product.description == undefined || product.price == undefined || product.brand == undefined){
  		return false;
  	} else {
  		return true;
  	}
  }

  validateEmail(email){
  	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
