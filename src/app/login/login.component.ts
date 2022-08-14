import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:any;
  loginForm=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9 A-Za-z]*')]]
  
  })


  constructor(private fb:FormBuilder,private db:NewserviceService,private router:Router) { }


  ngOnInit(): void {

  }
  // login(){
  //   var userid=this.loginForm.value.userid
  //   var password=this.loginForm.value.password
  //   if(this.loginForm.valid){
  //     this.result=this.db.login(userid,password)

  //     if(this.db.isloggin){
  //       alert("login success")
  //       this.router.navigateByUrl("/home")


  //     }else{
  //       alert("invalid form")
  //     }
  
  //   }
  //   else{
  //     alert("valid form")

  //     // console.log(this.result)
  //   }
  // }
  login(){
    var userid=this.loginForm.value.userid
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      this.result=this.db.login(userid,password)
      if(this.db.isloggin){
        alert("login successfully")
      }else{
        alert("invalid form")
      }
    }
    else{
      alert("valid form")
    }
  }
}















  //   if(this.loginForm.valid){
  //     const result=this.db.login(userid,password)
  //     console.log(result)
  //     if(result){
  //       alert("Login Successfull")
        
  //     }
  //     else{
  //       alert("Invalid User")
  //     }
  //   }else{
  //     alert("Invalid loginForm")
  //   }

  // }



