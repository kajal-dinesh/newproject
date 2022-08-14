import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private db:NewserviceService,private router:Router) { }
  UserData:any=[]


  ngOnInit(): void {
  }
  post(){
    this.db.postItemData(this.data).subscribe((result)=>{
      this.UserData.push(result)
      alert("submit successfully")
      this.router.navigateByUrl("/home")

    
    })
}
data={
  rank:'',
  personName:'',
  finalWorth:'',
  gender:'',
  countryOfCitizenship:'',
  source:'',

}


}
