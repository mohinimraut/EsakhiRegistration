import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MStatus } from '../models/login.model';
import { Education } from '../models/login.model';
import { Occupation } from '../models/login.model';
declare var angular: any; 
@Component({
selector: 'app-login',

templateUrl: './login.component.html',
styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

 
 bid = 'VKWPJJP';
 fname = 'GORDHAN';
 lname = 'SINGH';
 mnumber="9602391855";
 email="GOVERDHANSINGH123@RAJASTHAN.IN";
 dob = "31/12/1969";
 maritalstatus = "UNMARRIED";
 smartphone='yes';
 occupation="स्नातक";
 estatus="दसवीं पास";
 pincode="312023";
 mrs:MStatus[] = [
   {id: 1,name: 'married'},
   {id: 2, name: 'single'}
   ];

   edu:Education[] = [
     {id: 1,name: '10th'},
     {id: 2, name: '12th'}
     ];

     occup:Occupation[] = [
       {id: 1,name: 'Employed'},
       {id: 2, name: 'Homemaker'}
       ];
     

      
      submitted= false;
     
constructor() { }

ngOnInit() {
}
onSubmit(f: NgForm) {
  this.submitted= true;
  
 console.log(f.valid);  
 console.log(f.value);
   console.log(f.valid);  
 console.log(f.valid); 
console.log(f.valid); 
console.log(f.valid); 
 console.log(f.valid);
 console.log(f.valid);
 console.log(f.valid);
 console.log(f.valid);
  // false
 
}

}






