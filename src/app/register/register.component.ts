import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//   list: string[]=[
//     'kasaragod',
//     'kannur',
//     'wayanad',
//     'kozhikode',
//     'malappuram',
//     'palakkad',
//     'thrissur',
//     'ernakulam',
//     'idukki',
//     'kottayam',
//     'alappuzha',
//     'pathanamthitta',
//     'kollam',
//     'thiruvanathapuram'
// ];

  constructor( private fb:FormBuilder,private db:NewserviceService,private router:Router) { }
  regForm = this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lname:['',[Validators.required,Validators.pattern('[A-Aa-z ]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    phn:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]],
    dist:[''],
    userid:[''],
    password:['']
  })

  
  
  ngOnInit(): void {
  }
  submit(){
    var fname=this.regForm.value.fname
    var lname=this.regForm.value.lname
    var address=this.regForm.value.address
    var phn=this.regForm.value.phn
    var dist=this.regForm.value.dist
    var userid=this.regForm.value.userid
    var password=this.regForm.value.password
    if(this.regForm.valid){
      const result=this.db.submit(lname,fname,address,phn,dist,userid,password)
      if (result){
        alert("registered successfully")
        this.router.navigateByUrl("")
      }
      else{
        alert("user already exist please login")
      }

    }
    else{
      alert("invalid form")
    }
  }
  

}
